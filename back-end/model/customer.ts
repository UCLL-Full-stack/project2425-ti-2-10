import { Review } from "./review";
import { Ride } from "./ride";
import { User } from "./user";

export class Customer{
    private id?: number;
    private user: User;
    private reviews?: Review[];
    private rides?: Ride[];


    constructor(customer: { id?: number; user: User}){
        this.validate(customer);
        this.id = customer.id;
        this.user = customer.user;
    }
    validate(customer: { id?: number; user: User;}) {
        if (!customer.user) {
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
    getRides(): Ride[] | undefined{
        return this.rides;
    }

    addReviewToCostumer( review: Review){
        this.reviews?.push(review);
    }
    addRideToCostumer( ride :Ride){
        this.rides?.push(ride);
    }
}