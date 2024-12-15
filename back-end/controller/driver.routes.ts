import express, { NextFunction, Request, Response } from 'express';
import driverService from '../service/driver.service';


const driverRouter = express.Router();


driverRouter.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const drivers = await driverService.getAllDrivers();
        res.status(200).json(drivers);
    } catch (error) {
        next(error);
        console.log(error);
    }
});

export {driverRouter}