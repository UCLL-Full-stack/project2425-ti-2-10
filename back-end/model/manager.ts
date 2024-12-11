import { Ride } from "./ride";
import { User } from "./user";

export class Manager{
    private id?: number;
    private user: User;

    constructor(manager: { id?: number; user: User; rides: Ride[]}){
        this.id = manager.id;
        this.user = manager.user;
    }

    getUser(): User{
        return this.user;
    }
}