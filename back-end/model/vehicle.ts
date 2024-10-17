import { Ride } from "./ride";

export class Vehicle{
    private chassisnumber: string;
    private brand: string;
    private licenseplate: string;
    private rides: Ride[];

    constructor(vehicle: {chassisnumber: string; brand: string;  licenseplate: string;rides: Ride[]}){
        this.chassisnumber = vehicle.chassisnumber;
        this.brand = vehicle.brand;
        this.licenseplate= vehicle.licenseplate;
        this.rides = vehicle.rides;
    }

    getChassisNumber(): string{
        return this.chassisnumber;
    }
    getBrand(): string{
        return this.brand;
    }
    getLicenseplate(): string{
        return this.licenseplate;
    }
    getRides(): Ride[]{
        return this.rides;
    }
}