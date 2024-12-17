import { Customer } from "./customer";
import { Driver } from "./driver";
import { Manager } from "./manager";
import { Vehicle } from "./vehicle";

import { Driver as DriverPrisma, Customer as CustomerPrisma, User as UserPrisma, Manager as ManagerPrisma, Vehicle as VehiclePrisma, Review as ReviewPrisma} from "@prisma/client";

export class Ride {
    private id?: number;
    private startLocation: string;
    private date: Date;
    private destination: string;
    private driver: Driver;
    private customer: Customer;
    private vehicle: Vehicle;

    constructor(ride: {
        id?: number;
        startLocation: string;
        date: Date;
        destination: string;
        driver: Driver;
        customer: Customer;
        vehicle: Vehicle;
    }) {
        this.validate(ride);

        this.id = ride.id;
        this.startLocation = ride.startLocation;
        this.date = ride.date;
        this.destination = ride.destination;
        this.driver = ride.driver;
        this.customer = ride.customer;
        this.vehicle = ride.vehicle;
    }

    validate(ride: {
        id?: number;
        startLocation: string;
        date: Date;
        destination: string;
        driver: Driver;
        customer: Customer;
        vehicle: Vehicle;
    }) {
        if (!ride.startLocation) {
            throw new Error("startLocation should not be empty.");
        }
        if (!ride.date) {
            throw new Error("Date should not be empty.");
        }
        if (!ride.destination) {
            throw new Error("Destination should not be empty.");
        }
        if (!ride.driver) {
            throw new Error("A ride should have a driver.");
        }
        if (!ride.customer) {
            throw new Error("A ride should have a customer.");
        }
        if (!ride.vehicle) {
            throw new Error("A ride should have a vehicle.");
        }
    }

    getId(): number | undefined {
        return this.id;
    }

    getStartLocation(): string {
        return this.startLocation;
    }

    getDate(): Date {
        return this.date;
    }

    getDestination(): string {
        return this.destination;
    }

    getDriver(): Driver {
        return this.driver;
    }

    getCustomer(): Customer {
        return this.customer;
    }

    getVehicle(): Vehicle {
        return this.vehicle;
    }

    

   static from({
        id,
        startLocation,
        date,
        destination,
        driver,
        customer,
        vehicle,
        
    }: {
        id?: number;
        startLocation: string;
        date: Date;
        destination: string;
        driver: DriverPrisma & { user: UserPrisma; reviews: ReviewPrisma[]};
        customer: CustomerPrisma & { user: UserPrisma };
        vehicle: VehiclePrisma;
        
    }) {
        return new Ride({
            id,
            startLocation,
            date,
            destination,
            driver: Driver.from(driver),
            customer: Customer.from(customer),
            vehicle: Vehicle.from(vehicle),
        });
    }
    
}
