import { Review } from "./review";
import { Ride } from "./ride";

export class Driver{
    private id?: number;
    private firstName: string;
    private lastName: string;
    private birthday: Date;
    private email: string;
    private phoneNumber: string;
    private rides?: Ride[];
    private reviews?: Review[]; //undefined laten? of init met lege array altijd?

    constructor(driver: { id?: number; firstName: string;lastName: string;birthday: Date;email: string; phoneNumber:string}){
        this.id = driver.id;
        this.firstName = driver.firstName;
        this.lastName = driver.lastName;
        this.birthday = driver.birthday;
        this.email = driver.email;
        this.phoneNumber = driver.phoneNumber;
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
