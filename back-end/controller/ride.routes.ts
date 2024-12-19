import express, { NextFunction, Request, Response } from 'express';
import driverService from '../service/driver.service';
import rideService from '../service/ride.service';
import { EmailInput } from '../types';


const rideRouter = express.Router();

rideRouter.get('/', async (req: Request, res: Response, next: NextFunction) => { //alle rides krijgen
    try {
        const rides = await rideService.getAllRides();
        res.status(200).json(rides);
    } catch (error) {
        next(error);
        console.log(error);
    }
});


rideRouter.get('/driver', async (req: Request, res: Response, next: NextFunction) => { 
    try {
        const {email} = <EmailInput>req.body;
        const rides = await rideService.getRidesForDriver({email});
        res.status(200).json(rides);
    } catch (error) {
        next(error);
        console.log(error);
    }
});

export {rideRouter}