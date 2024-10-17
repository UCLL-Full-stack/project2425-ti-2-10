import { Review } from "./review";
import { Ride } from "./ride";

export class Customer{
    private id?: number;
    private firstName: string;
    private lastName: string;
    private birthday: Date;
    private email: string;
    private phoneNumber: string;
    private reviews?: Review[];
    private rides?: Ride[];


    constructor(customer: { id?: number; firstName: string;lastName: string;birthday: Date;email: string; phoneNumber:string}){
        this.id = customer.id;
        this.firstName = customer.firstName;
        this.lastName = customer.lastName;
        this.birthday = customer.birthday;
        this.email = customer.email;
        this.phoneNumber = customer.phoneNumber;
    }

    getId(): number | undefined {
        return this.id;
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
    getReviews(): Review[] | undefined{
        return this.reviews;
    }
    getRides(): Ride[] | undefined{
        return this.rides;
    }
}