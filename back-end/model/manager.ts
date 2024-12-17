import { Ride } from "./ride";
import { User } from "./user";
import {User as UserPrisma, Manager as ManagerPrisma} from '@prisma/client'

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

    getId(): number | undefined{
        return this.id;
    }
    static from({ id, user, createdAt, updatedAt }: ManagerPrisma & { user: UserPrisma }) {
        return new Manager({
            id,
            user: User.from(user),
            rides: [], // Initialize with an empty array or handle appropriately
        });
    }
}