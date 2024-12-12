import { Ride } from "./ride";

export class Vehicle{
    private id?: number;
    private chassisnumber: string;
    private brand: string;
    private licenseplate: string;
    private rides: Ride[];

    constructor(vehicle: {chassisnumber: string; brand: string;  licenseplate: string;rides: Ride[]}){
        this.validate(vehicle);
        
        this.chassisnumber = vehicle.chassisnumber;
        this.brand = vehicle.brand;
        this.licenseplate= vehicle.licenseplate;
        this.rides = vehicle.rides;
    }
    validate(vehicle: {chassisnumber: string; brand: string;  licenseplate: string;rides: Ride[]}){
        if(!vehicle.chassisnumber){
            throw new Error("Chassisbumber is required.");
        }
        if(!vehicle.brand){
            throw new Error("Brand of the vehicle is required.");
        }
        if(!vehicle.licenseplate){
            throw new Error("Licenseplate of the vehicle is required.");
        }
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

    getId(): number | undefined {
        return this.id;
    }
    addRideToVehicle( ride: Ride) {
        this.rides.push(ride);
    }
}