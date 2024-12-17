import { Review } from "./review";
import { Ride } from "./ride";
import { User } from "./user";

import {User as UserPrisma, Customer as CustomerPrisma} from '@prisma/client'

export class Customer{
    private id?: number;
    private user: User;


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
    
    

    static from({ id, user, createdAt, updatedAt }: CustomerPrisma & { user: UserPrisma }) {
        return new Customer({
            id,
            user: User.from(user),
        });
    }
}