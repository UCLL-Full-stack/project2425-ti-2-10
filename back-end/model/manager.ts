import { Ride } from "./ride";
import { User } from "./user";

export class Manager{
    private id?: number;
    private user: User;
    private rides?: Ride[];

    constructor(manager: { id?: number; user: User; rides: Ride[]}){
       this.validate(manager);
        this.id = manager.id;
        this.user = manager.user;
    }
    validate(manager: { user: User;}) {
        if (!manager.user) {
            throw new Error('User is required');
        }
    }

    getUser(): User{
        return this.user;
    }
}