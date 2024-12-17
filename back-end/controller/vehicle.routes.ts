import express, { NextFunction, Request, Response } from 'express';
import driverService from '../service/driver.service';


const vehicleRouter = express.Router();

export {vehicleRouter}