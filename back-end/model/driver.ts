import { Review } from "./review";
import { Ride } from "./ride";
import { User } from "./user";

export class Driver{
    readonly id?: number;
    readonly user: User;
    readonly rides?: Ride[];
    readonly reviews?: Review[]; //undefined laten? of init met lege array altijd?

    constructor(driver: { id?: number; user: User; rides?: Ride[]; reviews?:Review[]}){
        this.validate(driver);

        
        this.id = driver.id;
        this.user = driver.user;
        this.rides = driver.rides;
        this.reviews = driver.reviews;
    }
    validate(driver: { id?: number; user: User; rides?: Ride[]; reviews?:Review[]}) {
        if (!driver.user) {
            throw new Error('Firstname is required');
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
}
