type Role = 'customer' | 'driver' | 'manager';

type UserInput = {
    id?: number;
    firstName: string;
    lastName: string;
    birthday: Date;
    email: string;
    phoneNumber: string;
    password: string;
    role: Role;
};

type ReviewInput = {
    id?: number;
    rating: number;
    text: string;
};

type DriverInput = {
    id?: number;
    user:UserInput;
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
};
type CustomerInput = {
    id?: number;
    user: UserInput;
};
type VehicleInput = {
    id?: number;
    chassisnumber: string;
    brand: string;
    licenseplate: string;
};
type ManagerInput = {
    user:UserInput;
    rides: RideInput[];
};

type AuthenticationResponse = {
    token: string;
    email: string;
    role: string;
};
type reviewToDriverInput = {
    driver: DriverInput,
    review: ReviewInput
}
type EmailInput= {
    email: string;
}

export {
    Role,UserInput,CustomerInput,DriverInput,ManagerInput,VehicleInput,RideInput,ReviewInput,AuthenticationResponse, EmailInput, reviewToDriverInput
}