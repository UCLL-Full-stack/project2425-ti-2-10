import { Review } from "./review";
import { Ride } from "./ride";
import { User } from "./user";

import { Driver as DriverPrisma, User as UserPrisma , Review as ReviewPrisma} from "@prisma/client";

export class Driver{
    private id?: number;
    private user: User;
    private reviews?: Review[]; //undefined laten? of init met lege array altijd?

    constructor(driver: { id?: number; user: User; rides?: Ride[]; reviews?:Review[]}){
        this.validate(driver);

        
        this.id = driver.id;
        this.user = driver.user;
        this.reviews = driver.reviews;
    }
    validate(driver: { id?: number; user: User; rides?: Ride[]; reviews?:Review[]}) {
        if (!driver.user) {
            throw new Error('User is required');
        }
    }

    getId(): number | undefined {
        return this.id;
    }
    getUser(): User {
        return this.user;
    }

    getReviews(): Review[] | undefined{
        return this.reviews;
    }
    addReviewToDriver(review: Review){
        this.reviews?.push(review);
    }

    static from({
        id,
        user,
        reviews,
        createdAt,
        updatedAt,

    }: DriverPrisma & {user: UserPrisma; reviews: ReviewPrisma[]}){
        return new Driver({
            id,
            user: User.from(user),
            reviews: reviews.map((review)=> Review.from(review))
            
        })
    }
}
