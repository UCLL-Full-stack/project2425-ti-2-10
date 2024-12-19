import { Review as ReviewPrisma } from "@prisma/client";
import { ReviewInput, Role } from "../types";
import reviewDB from "../repository/review.db";
import { Review } from "../model/review";


const createReview = async ({
    rating,
    text
}: ReviewInput): Promise<Review> => {

    
    const review = new Review({ rating,text });
    return await reviewDB.createReview(review);
};