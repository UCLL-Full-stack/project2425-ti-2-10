type Role = 'customer' | 'driver' | 'manager';

type UserInput = {
    id?: number;
    firstName: string;
    lastName: string;
    birthday: Date;
    email: string;
    phoneNumber: string;
}

type ReviewInput = {
    id?: number;
    rating: number;
    text: string;
    driver: DriverInput;
}
type DriverInput = {
    id?: number;
    user:UserInput;
    rides?: RideInput[];
    reviews?: ReviewInput[];
};

type RideInput = {
    id?: number;
    startLocation: string;
    date: Date;
    destination: string;
    driver: DriverInput;
    customer: CustomerInput;
    vehicle: VehicleInput;
    manager: ManagerInput;
}
type CustomerInput = {
    id?: number;
    user: UserInput;
    reviews?: ReviewInput[];
    rides?: RideInput[];
}
type VehicleInput = {
    chassisnumber: string;
    brand: string;
    licenseplate: string;
    rides: RideInput[];
}

type ManagerInput = {
    user:UserInput;
    rides: RideInput[];
}

export {
    Role,UserInput,CustomerInput,DriverInput,ManagerInput,VehicleInput,RideInput,ReviewInput
}