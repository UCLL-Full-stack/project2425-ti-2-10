import { Ride } from "./ride";
import { Vehicle as VehiclePrisma } from "@prisma/client";

export class Vehicle{
    private id?: number;
    private chassisnumber: string;
    private brand: string;
    private licenseplate: string;

    constructor(vehicle: {id?: number, chassisnumber: string; brand: string;  licenseplate: string;}){
        this.validate(vehicle);
        this.id = vehicle.id;
        this.chassisnumber = vehicle.chassisnumber;
        this.brand = vehicle.brand;
        this.licenseplate= vehicle.licenseplate;
    }
    validate(vehicle: {chassisnumber: string; brand: string;  licenseplate: string}){
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
    

    getId(): number | undefined {
        return this.id;
    }
    

    static from({ id, chassisnumber, brand, licenseplate, }: VehiclePrisma ) {
        return new Vehicle({
            id,
            chassisnumber,
            brand,
            licenseplate,
        });
    }
}