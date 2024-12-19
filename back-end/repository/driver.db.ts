import { Driver } from "../model/driver";
import database from './database';


import { Ride } from "../model/ride";
import { User } from "../model/user";


const getAllDrivers = async ():Promise<Driver[]> => {
    const driversPrisma = await database.driver.findMany({
        include: {
            user: true ,reviews: true//zegt  van wat er info ook moet bijgehpuden worden
        }
    })
    return driversPrisma.map((driverPrisma) => Driver.from(driverPrisma))
};

const getDriverById = async ({ id }: { id: number }): Promise<Driver | null> => {
    try {
        const driverPrisma = await database.driver.findUnique({
            where: { id },
            include: { user: true, rides: true, reviews: true},
        });

        return driverPrisma ? Driver.from(driverPrisma) : null;
    } catch (error) {
        console.error(error);
        throw new Error('Database error. See server log for details.');
    }
};

const updateReviewsOfDriver = async ({
    driver,
}: {
    driver: Driver;
}): Promise<Driver | null> => {
    if (!driver) {
        throw new Error('Driver is required');
    }

    try {
        const driverPrisma = await database.driver.update({
            where: { id: driver.getId() },
            data: {
                reviews: {
                    connect: driver.getReviews().map((review) => ({ id: review.getId() })),
                },
            },
            include: {
                user: true,
                reviews: true,
            },
        });
        return driverPrisma ? Driver.from(driverPrisma) : null;
    } catch (error) {
        console.error(error);
        throw new Error('Database error. See server log for details.');
    }
};







export default{
    getAllDrivers,getDriverById,updateReviewsOfDriver}
