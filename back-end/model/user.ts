

export class User{

    readonly id?: number;
    readonly firstName: string;
    readonly lastName: string;
    readonly birthday: Date;
    readonly email: string;
    readonly phoneNumber: string;

    constructor(user: { id?: number; firstName: string;lastName: string;birthday: Date;email: string; phoneNumber:string;}){
        this.validate(user);

        
        this.id = user.id;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.birthday = user.birthday;
        this.email = user.email;
        this.phoneNumber = user.phoneNumber;
    }

    validate(user: { id?: number; firstName: string;lastName: string;birthday: Date;email: string; phoneNumber:string; }) {
        if (!user.firstName) {
            throw new Error('Firstname is required');
        }
        if (!user.lastName) {
            throw new Error('Lastname is required');
        }if (!user.birthday) {
            throw new Error('Birthday is required');
        }if (!user.email) {
            throw new Error('Email is required');
        }if (!user.phoneNumber) {
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


}