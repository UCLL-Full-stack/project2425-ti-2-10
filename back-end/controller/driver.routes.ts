import express, { NextFunction, Request, Response } from 'express';
import driverService from '../service/driver.service';


const driverRouter = express.Router();


driverRouter.post('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const driver = <DriverInput>req.body;
        const result = await driverService.createDriver(driver);
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
});

driverRouter.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const drivers = await driverService.getAllDrivers();
        res.status(200).json(drivers);
    } catch (error) {
        next(error);
    }
});

export {driverRouter}