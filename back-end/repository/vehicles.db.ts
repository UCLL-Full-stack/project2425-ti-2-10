
import database from "./database";
import { Vehicle } from "../model/vehicle";


const getAllVehicles = async ():Promise<Vehicle[]> => {
    try {const VehiclesPrisma = await database.vehicle.findMany();
    return VehiclesPrisma.map((vehicle) => Vehicle.from(vehicle));
}
catch(error){
    console.error(error);
    throw new Error('Database error. See server log for details.');
}
};

const createVehicle = async (vehicle: Vehicle): Promise<Vehicle> => {
    try {
        const vehiclePrisma = await database.vehicle.create({
            data: {
                chassisnumber: vehicle.getChassisNumber(),
                brand: vehicle.getBrand(),
                licenseplate: vehicle.getLicenseplate()
            }
        });

        return Vehicle.from(vehiclePrisma)
    } catch (error) {
        console.error("Database error:", error);
        throw new Error("Database error. See server log for details.");
    }
};


const getVehicleById = async ({ id }: { id: number }): Promise<Vehicle | null> => {
    try {
        const vehiclePrisma = await database.vehicle.findUnique({
            where: { id },
        });

        return vehiclePrisma ? Vehicle.from(vehiclePrisma) : null;
    } catch (error) {
        console.error(error);
        throw new Error('Database error. See server log for details.');
    }
};

const getVehicleByLicenseplate = async ({ license }: { license: string }): Promise<Vehicle | null> => {
    try {
        const vehiclePrisma = await database.vehicle.findFirst({
            where: { licenseplate: license },
        });

        return vehiclePrisma ? Vehicle.from(vehiclePrisma) : null;
    } catch (error) {
        console.error(error);
        throw new Error('Database error. See server log for details.');
    }
};
export default{getAllVehicles,createVehicle,getVehicleById, getVehicleByLicenseplate}