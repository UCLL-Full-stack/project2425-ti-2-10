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
    private customer: Customer;
    private vehicle: Vehicle;
    private managers: Manager[];
    
    constructor(ride: { id?: number; startLocation: string;date: Date; destination: string;driver: Driver;customer: Customer;vehicle: Vehicle;managers: Manager[]}){
        this.id = ride.id;
        this.startLocation = ride.startLocation;
        this.date = ride.date;
        this.destination = ride.destination;
        this.customer = ride.customer;
        this.driver = ride.driver;
        this.vehicle = ride.vehicle;
        this.managers = ride.managers;
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
    getCustomer(): Customer{
        return this.customer;
    }
    getVehicle(): Vehicle{
        return this.vehicle;
    }
    getManagers(): Manager[]{
        return this.managers;
    }
}