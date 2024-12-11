
type ReviewInput = {
    id?: number;
    rating: number;
    text: string;
}
type DriverInput = {
    id?: number;
    firstName: string;
    lastName: string;
    birthday: Date;
    email: string;
    phoneNumber: string;
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
    managers: ManagerInput[];
}
type CustomerInput = {
     id?: number;
     firstName: string;
     lastName: string;
     birthday: Date;
     email: string;
     phoneNumber: string;
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
     email: string;
     firstName: string;
     lastName: string;
     rides: RideInput[];
}