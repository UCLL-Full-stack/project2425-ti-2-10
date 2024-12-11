import { Review } from "./review";
import { Ride } from "./ride";
import { User } from "./user";

export class Customer{
    private id?: number;
    readonly user: User;
    private reviews?: Review[];
    private rides?: Ride[];


    constructor(customer: { id?: number; user: User}){
        this.id = customer.id;
        this.user = customer.user;
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
}