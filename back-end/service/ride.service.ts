
import { Ride } from "../model/ride";
import rideDb from "../repository/ride.db";



const getAllRides = async (): Promise<Ride[]> => {
    return rideDb.getAllRides();
}


export
 default {getAllRides}