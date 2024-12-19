import { reverse } from "dns";
import { Review } from "../model/review";
import database from "./database";


const createReview= async (review: Review): Promise<Review> => {
    try {
        const reviewPrisma = await database.review.create({
            data: {
                rating: review.getRating(),
                text: review.getText(),
            },
        });

        return Review.from(reviewPrisma)
    } catch (error) {
        console.error("Database error:", error);
        throw new Error("Database error. See server log for details.");
    }
};

export default{createReview}