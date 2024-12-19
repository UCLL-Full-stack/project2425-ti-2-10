
import { Ride } from "../model/ride";
import rideDb from "../repository/ride.db";


const getRidesForDriver = async ({ email }: { email: string }): Promise<Ride[]> => {
    return rideDb.getRidesForDriver({email});
}
const getAllRides = async (): Promise<Ride[]> => {
    return rideDb.getAllRides();
}


export
 default {getAllRides, getRidesForDriver}