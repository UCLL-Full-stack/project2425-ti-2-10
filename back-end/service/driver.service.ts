import { Review as ReviewPrisma} from "@prisma/client";
import { Driver } from "../model/driver";
import { User } from "../model/user";
import driverDb from "../repository/driver.db";

import reviewDb from "../repository/review.db";
import { DriverInput, ReviewInput } from "../types";
import { Review } from "../model/review";


const getAllDrivers = async (): Promise<Driver[]> => {
    return driverDb.getAllDrivers();
}
const getDriverById = async (id: number): Promise<Driver> => {
    const driver = await driverDb.getDriverById({ id });
    if (!driver) throw new Error(`Driver with id ${id} does not exist.`);
    return driver;
}

const addReviewToDriver = async ({
    driver: driverInput,
    review: reviewInput,
}: {
    driver: DriverInput;
    review: ReviewInput;
}): Promise<Driver | null> => {
    if (!driverInput.id) throw new Error('Driver id is required');

    const driver = await driverDb.getDriverById({ id: driverInput.id });
    if (!driver) throw new Error('Driver not found');
    if(driver.getReviews() ===null){driver.setReviews()}

    const newReview = await reviewDb.createReview(
        new Review({
            rating: reviewInput.rating,
            text: reviewInput.text,
        })
    );

    
        driver.addReviewToDriver(newReview);

    return await driverDb.updateReviewsOfDriver({ driver });
};



export default{getAllDrivers,getDriverById,addReviewToDriver};