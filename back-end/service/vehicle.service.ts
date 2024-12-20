
import { Role, VehicleInput } from "../types";
import { UnauthorizedError } from "express-jwt";

import vehicleDB from "../repository/vehicles.db";
import { Vehicle } from "../model/vehicle";
import { vehicleRouter } from "../controller/vehicle.routes";

const getAllVehicles = async ({ role }: { role: Role}): Promise<Vehicle[]> => {
    if(role==="manager"){
        return vehicleDB.getAllVehicles();
    }
    else {
        throw new UnauthorizedError('credentials_required', {message: 'You are not authorized to access this resource.', });
    }
    
}

const createVehicle = async ({
    chassisnumber,
    licenseplate,
    brand
}: VehicleInput): Promise<Vehicle> => {


    const existingSchedule = await vehicleDB.getVehicleByLicenseplate({
        license: licenseplate,
    });

    if (existingSchedule) throw new Error('This course is already scheduled for this lecturer.');

    const vehicle = new Vehicle({ chassisnumber,licenseplate,brand });
    return await vehicleDB.createVehicle(vehicle);
};
const getVehicleById = async (id: number): Promise<Vehicle> => {
    const vehicle = await vehicleDB.getVehicleById({ id });
    if (!vehicle) throw new Error(`Vehicle with id ${id} does not exist.`);
    return vehicle;
}


export 
    default{getAllVehicles, createVehicle,getVehicleById}