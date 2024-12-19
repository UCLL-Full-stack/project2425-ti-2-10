
import { UnauthorizedError } from "express-jwt";
import { Ride } from "../model/ride";
import rideDb from "../repository/ride.db";
import customerDB from "../repository/customer.db";
import { RideInput, Role } from "../types";
import driverDb from "../repository/driver.db";
import vehicleDb from "../repository/vehicles.db";


const getRides = async ({ email,role }: { email: string ,role: Role}): Promise<Ride[]> => {
    if(role==="manager"){
        return rideDb.getAllRides();
    }
    else if(role ==="driver"){
        return rideDb.getRidesForDriver({email});
    }else {
        throw new UnauthorizedError('credentials_required', {message: 'You are not authorized to access this resource.', });
    }
    
};
const getAllRides = async (): Promise<Ride[]> => {
    return rideDb.getAllRides();
};

const createRide = async ({
    startLocation,
    date,
    destination,
    
    driver: driverInput,
    customer: customerInput,
    vehicle: vehicleInput
}: RideInput): Promise<Ride> => {
    if (!driverInput.id) throw new Error('Driver id is required');
    if (!customerInput.id) throw new Error('Customer id is required');
    if (!vehicleInput.id) throw new Error('Vehicle is required');

    const driver = await driverDb.getDriverById({ id: driverInput.id });
    const customer = await customerDB.getCustomerById({ id: customerInput.id });
    const vehicle = await vehicleDb.getVehicleById({ id: vehicleInput.id });

    if (!driver) throw new Error('driver not found');
    if (!customer) throw new Error('customer not found');
    if (!vehicle) throw new Error('vehicle not found');


    const existingRideForDriver = await rideDb.getRideByDateAndDriver({
        driverId: driverInput.id,
        date: date,
    });
    const existingRideForVehicle = await rideDb.getRideByDateAndVehicle({
        vehicleId: vehicleInput.id,
        date: date,
    });

    if (existingRideForDriver) throw new Error('There is already a ride scheduled for this driver at that time.');
    if (existingRideForVehicle) throw new Error('There is already a ride scheduled for this vehicle at that time.');

    const ride = new Ride({ startLocation, date, destination, driver, customer,vehicle });
    return await rideDb.createRide(ride);
};



export
 default {getAllRides, getRides, createRide}