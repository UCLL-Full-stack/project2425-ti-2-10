import { Role } from "../types";



export class User{

    readonly id?: number;
    readonly firstName: string;
    readonly lastName: string;
    readonly birthday: Date;
    readonly email: string;
    readonly phoneNumber: string;
    readonly  role: Role;

    constructor(user: { id?: number; firstName: string;lastName: string;birthday: Date;email: string; phoneNumber:string; role: Role;}){
        this.validate(user);

        
        this.id = user.id;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.birthday = user.birthday;
        this.email = user.email;
        this.phoneNumber = user.phoneNumber;
        this.role = user.role;
    }

    validate(user: { id?: number; firstName: string;lastName: string;birthday: Date;email: string; phoneNumber:string;role: Role }) {
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

    


}