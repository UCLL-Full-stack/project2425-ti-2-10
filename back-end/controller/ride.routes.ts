/**
 * @swagger
 *   components:
 *    securitySchemes:
 *     bearerAuth:
 *      type: http
 *      scheme: bearer
 *      bearerFormat: JWT
 *    schemas:
 *      Ride:
 *          type: object
 *          properties:
 *            id:
 *              type: number
 *              format: int64
 *            date:
 *              type: string
 *              format: date-time
 *            startLocation:
 *              type: string
 *              format: string
 *            destination: 
 *              type: string 
 *              format string
 *            driver:
 *              $ref: '#/components/schemas/Driver'
 *            customer:
 *              $ref: '#/components/schemas/Customer'
 *            vehicle:
 *              $ref: '#/components/schemas/Vehicle'
 *      ScheduleInput:
 *          type: object
 *          properties:
 *            startLocation: 
 *              type: string
 *              format: string
 *            date:
 *              type: string
 *              format: date-time
 *            destination:
 *              type: string
 *              format: string
 *            driver:
 *              type: object
 *              properties:
 *                  id:
 *                      type: number
 *                      format: int64
 *            customer:
 *              type: object
 *              properties:
 *                  id:
 *                      type: number
 *                      format: int64
 *            vehicle:
 *              type: object
 *              properties:
 *                  id:
 *                      type: number
 *                      format: int64
 *      
 */
import express, { NextFunction, Request, Response } from 'express';
import driverService from '../service/driver.service';
import rideService from '../service/ride.service';
import { EmailInput, RideInput, Role } from '../types';


const rideRouter = express.Router();

/* rideRouter.get('/', async (req: Request, res: Response, next: NextFunction) => { //alle rides krijgen
    try {
        const rides = await rideService.getAllRides();
        res.status(200).json(rides);
    } catch (error) {
        next(error);
        console.log(error);
    }
}); */


rideRouter.get('/', async (req: Request , res: Response, next: NextFunction) => { 
    try {
        const request = req as Request & { auth: { email: string; role: Role } };
        const {email, role} = request.auth;
        const rides = await rideService.getRides({email, role});
        res.status(200).json(rides);
    } catch (error) {
        next(error);
        console.log(error);
    }
});

/**
 * @swagger
 * /rides:
 *   post:
 *      security:
 *       - bearerAuth: []
 *      summary: Create a new ride for an existing driver, customer and vehicle.
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/RideInput'
 *      responses:
 *         200:
 *            description: The created ride.
 *            content:
 *              application/json:
 *                schema:
 *                  $ref: '#/components/schemas/Ride'
 */

rideRouter.post('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const ride = <RideInput>req.body;
        const result = await rideService.createRide(ride);
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
});

export {rideRouter}