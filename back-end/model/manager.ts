import { Ride } from "./ride";

export class Manager{
    private email: string;
    private firstName: string;
    private lastName: string;
    private rides: Ride[];

    constructor(manager: {email: string;firstName: string;lastName: string; rides: Ride[]}){
        this.email = manager.email;
        this.firstName = manager.firstName;
        this.lastName = manager.lastName;
        this.rides = manager.rides;
    }

    getEmail(): string{
        return this.email;
    }
    getFirstName(): string{
        return this.firstName;
    }
    getLastName(): string{
        return this.lastName;
    }
    getRides(): Ride[]{
        return this.rides;
    }
}