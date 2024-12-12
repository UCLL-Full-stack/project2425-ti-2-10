import { Customer } from "./customer";
import { Driver } from "./driver";
import { Manager } from "./manager";
import { Vehicle } from "./vehicle";

export class Ride{
    private id?: number;
    private startLocation: string;
    private date: Date;
    private destination: string;
    private driver: Driver;
    private customer?: Customer;
    private vehicle?: Vehicle;
    private manager?: Manager;
    
    constructor(ride: { id?: number; startLocation: string;date: Date; destination: string;driver: Driver;customer: Customer;vehicle: Vehicle;manager: Manager}){
        this.validate(ride);
        
        this.id = ride.id;
        this.startLocation = ride.startLocation;
        this.date = ride.date;
        this.destination = ride.destination;
        this.customer = ride.customer;
        this.driver = ride.driver;
        this.vehicle = ride.vehicle;
        this.manager = ride.manager;
    }

    validate(ride: { id?: number; startLocation: string;date: Date; destination: string;driver: Driver;customer: Customer;vehicle: Vehicle;manager: Manager}){
        if(!ride.startLocation){
            throw new Error("startLocation should not be empty.")
        }
        if(!ride.date){
            throw new Error("Date should not be empty.")
        }
        if(!ride.destination){
            throw new Error("Destination should not be empty.")
        }
        if(!ride.driver){
            throw new Error("A ride should have a driver.")
        }
        if(!ride.customer){
            throw new Error("A ride should have a customer.")
        }
        if(!ride.vehicle){
            throw new Error("A ride should have a vehicle.")
        }
        if(!ride.manager){
            throw new Error("A ride should be managed by a manager.")
        }
    }

    getId(): number | undefined {
        return this.id;
    }
    getStartLocation(): string{
        return this.startLocation;
    }
    getDate(): Date{
        return this.date;
    }
    getDestination(): string{
        return this.destination;
    }
    getDriver(): Driver{
        return this.driver;
    }
    getCustomer(): Customer | undefined{
        return this.customer;
    }
    getVehicle(): Vehicle | undefined{
        return this.vehicle;
    }
    getManagers(): Manager | undefined{
        return this.manager;
    }
}