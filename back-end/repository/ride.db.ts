import { connect } from "http2";
import { Ride } from "../model/ride";
import database from "./database";


const getAllRides = async ():Promise<Ride[]> => {
    try{ const ridesPrisma = await database.ride.findMany({
        include: {
            driver: {
                include: {
                    user: true, // Include user details for the driver
                    reviews: true, // Include reviews for the driver
                }},
            customer: {include: {user: true}}, //include user voor customer
            vehicle: true  //niet managers want ik denk dat dit niet nodig is voor de frontend
        }
    })
    return ridesPrisma.map((ridePrisma) => Ride.from(ridePrisma));
    }catch (error) {
        console.error(error);
        throw new Error('Database error. See server log for details.');
    }
};


const getRidesForDriver = async ({ email }: { email: string }): Promise<Ride[]> => {
    try {
        const ridesPrisma = await database.ride.findMany({
            where: { driver: { user: { email } } },
            include: {
                driver: {
                    include: {
                        user: true, // Include user details for the driver
                        reviews: true, // Include reviews for the driver
                    }},
                customer: {include: {user: true}}, //include user voor customer
                vehicle: true  //niet managers want ik denk dat dit niet nodig is voor de frontend
            },
        });
        return ridesPrisma.map((ridePrisma) => Ride.from(ridePrisma));
    } catch (error) {
        console.error(error);
        throw new Error('Database error. See server log for details.');
    }
};


const getRidesForCustomer = async ({ email }: { email: string }): Promise<Ride[]> => {
    try {
        const ridesPrisma = await database.ride.findMany({
            where: { customer: { user: { email } } },
            include: {
                driver: {
                    include: {
                        user: true, // Include user details for the driver
                        reviews: true, // Include reviews for the driver
                    }},
                customer: {include: {user: true}}, //include user voor customer
                vehicle: true  //niet managers want ik denk dat dit niet nodig is voor de frontend
            },
        });
        return ridesPrisma.map((ridePrisma) => Ride.from(ridePrisma));
    } catch (error) {
        console.error(error);
        throw new Error('Database error. See server log for details.');
    }
};

const createRide = async (ride: Ride): Promise<Ride> => {
    try {
        const ridePrisma = await database.ride.create({
            data: {
                startLocation: ride.getStartLocation(),
                date: ride.getDate(),
                destination: ride.getDestination(),
                driver: {
                    connect: { id: ride.getDriver().getId() },
                },
                customer: {
                    connect: { id: ride.getCustomer().getId() },
                },
                vehicle: {
                    connect: { id: ride.getVehicle().getId() },
                }
                
            },
            include: {
                driver: { include: { user: true , reviews:true} },
                customer: { include: { user: true } },
                vehicle: true,
            },
        });

        return Ride.from(ridePrisma)
    } catch (error) {
        console.error("Database error:", error);
        throw new Error("Database error. See server log for details.");
    }
};


const getRideByDateAndDriver = async ({
    date,
    driverId,
}: {
    date: Date;
    driverId: number;
}): Promise<Ride | null> => {
    try {
        const ridePrisma = await database.ride.findFirst({
            where: { date, driverId },
            include: {
                driver: { include: { user: true , reviews:true} },
                customer: { include: { user: true } },
                vehicle: true,
            },
        });
        return ridePrisma ? Ride.from(ridePrisma) : null;
    } catch (error) {
        console.error(error);
        throw new Error('Database error. See server log for details.');
    }
};

const getRideByDateAndVehicle = async ({
    date,
    vehicleId,
}: {
    date: Date;
    vehicleId: number;
}): Promise<Ride | null> => {
    try {
        const ridePrisma = await database.ride.findFirst({
            where: { date, vehicleId },
            include: {
                driver: { include: { user: true , reviews:true} },
                customer: { include: { user: true } },
                vehicle: true,
            },
        });
        return ridePrisma ? Ride.from(ridePrisma) : null;
    } catch (error) {
        console.error(error);
        throw new Error('Database error. See server log for details.');
    }
};


export default{
    getAllRides, getRidesForDriver,createRide,getRideByDateAndDriver,getRideByDateAndVehicle, getRidesForCustomer}
