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
        this.id = ride.id;
        this.startLocation = ride.startLocation;
        this.date = ride.date;
        this.destination = ride.destination;
        this.customer = ride.customer;
        this.driver = ride.driver;
        this.vehicle = ride.vehicle;
        this.manager = ride.manager;
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