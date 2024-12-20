export type User = {
    id?: number;
    firstName?: string;
    lastName?: string;
    birthday?: Date;
    email?: string;
    phoneNumber?: string;
    role?: string;
};

export type Driver = {
    id?: number;
    user?: User;
    reviews?: Review[];
}

export type Customer = {
    id?: number;
    user?: User;
}

export type Review = {
    id?: number;
    rating: number;
    text: String;
}

export type Vehicle ={
    id?: number;
    chassisnumber: number;
    brand: string;
    licenseplate: string;
}

export type Ride ={
    id?: number;
    startLocation: String;
    date: Date;
    destination: String;
    driver: Driver;
    customer: Customer;
    vehicle: Vehicle;
}

export type StatusMessage = {
    message: string;
    type: "error" | "success";
};