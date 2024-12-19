import { Role } from "../types";
import {User as UserPrisma} from '@prisma/client'


export class User{

    readonly id?: number;
    readonly firstName: string;
    readonly lastName: string;
    readonly birthday: Date;
    readonly email: string;
    readonly phoneNumber: string;
    readonly  role: Role;
    readonly password: string;

    constructor(user: { id?: number; firstName: string;lastName: string;birthday: Date;email: string; phoneNumber:string; role: Role;password: string;}){
        this.validate(user);

        
        this.id = user.id;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.birthday = user.birthday;
        this.email = user.email;
        this.phoneNumber = user.phoneNumber;
        this.role=user.role;
        this.password = user.password;
    }

    validate(user: { id?: number; firstName: string;lastName: string;birthday: Date;email: string; phoneNumber:string;role: Role ;password: string;}) {
        if (!user.firstName?.trim()) {
            throw new Error('Firstname is required');
        }
        if (!user.lastName?.trim()) {
            throw new Error('Lastname is required');
        }if (!user.birthday) {
            throw new Error('Birthday is required');
        }if (!user.email?.trim()) {
            throw new Error('Email is required');
        }if (!user.phoneNumber?.trim()) {
            throw new Error('PhoneNumber is required');
        }
        if ( user.password?.trim().length < 8){
            throw new Error('Password must be at least 8 characters long')
        }
    }

    getFirstName(): string{
        return this.firstName;
    }
    getLastName(): string{
        return this.lastName;
    }
    getBirthday(): Date{
        return this.birthday;
    }
    getEmail(): string{
        return this.email;
    }
    getPhoneNumber(): string {
        return this.phoneNumber;
    }
    getRole(): Role {
        return this.role;
    }
    getPassword(): string {
        return this.password;
    }

    static from({ id, firstName, lastName, birthday, email, phoneNumber, role, password}: UserPrisma) {
        return new User({
            id,
            firstName,
            lastName,
            birthday,
            email,
            phoneNumber,
            password,
            role: role as Role,
        });
    }
    


}