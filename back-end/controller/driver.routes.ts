import express, { NextFunction, Request, Response } from 'express';
import driverService from '../service/driver.service';


const driverRouter = express.Router();


driverRouter.get('/', async (req: Request, res: Response, next: NextFunction) => { //alle drivers krijgen
    try {
        const drivers = await driverService.getAllDrivers();
        res.status(200).json(drivers);
    } catch (error) {
        next(error);
        console.log(error);
    }
});

driverRouter.get('/:id', async (req: Request, res: Response, next: NextFunction) => { //driver krijgen op id
    try {
        const driver = await driverService.getDriverById(Number(req.params.id));
        res.status(200).json(driver);
    } catch (error) {
        next(error);
    }
});



export {driverRouter}