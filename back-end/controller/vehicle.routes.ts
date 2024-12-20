import express, { NextFunction, Request, Response } from 'express';
import driverService from '../service/vehicle.service';
import { Role, VehicleInput } from '../types';
import vehicleService from '../service/vehicle.service';

/**
 * @swagger
 *   components:
 *    securitySchemes:
 *     bearerAuth:
 *      type: http
 *      scheme: bearer
 *      bearerFormat: JWT
 *    schemas:
 *      Vehicle:
 *          type: object
 *          properties:
 *            id:
 *              type: number
 *              format: int64
 *            chassisnumber:
 *              type: string
 *              description: chassisnumber.
 *            brand:
 *              type: string
 *              description: brand
 *            licenseplate:
 *              type: string
 *              description: licenseplate
 *      VehicleInput:
 *          type: object
 *          properties:
 *            chassisnumber:
 *              type: string
 *              description: chassisnumber.
 *            brand:
 *              type: string
 *              description: brand
 *            licenseplate:
 *              type: string
 *              description: licenseplate
 *         
 */
const vehicleRouter = express.Router();
/**
 * @swagger
 * /vehicles:
 *   get:
 *     security:
 *         - bearerAuth: []
 *     summary: Get a list of all vehicles.
 *     responses:
 *       200:
 *         description: A list of all stored vehicles.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Vehicle'
 */

vehicleRouter.get('/', async (req: Request, res: Response, next: NextFunction) => { 
    try {
        const request = req as Request & { auth: { email: string; role: Role } };
        const {email, role} = request.auth;
        const vehicles = await vehicleService.getAllVehicles({role});
        res.status(200).json(vehicles);
    } catch (error) {
        next(error);
        console.log(error);
    }
});

/**
 * @swagger
 * /vehicles:
 *   post:
 *      security:
 *       - bearerAuth: []
 *      summary: Create a new vehicle.
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/VehicleInput'
 *      responses:
 *         200:
 *            description: The created vehicle.
 *            content:
 *              application/json:
 *                schema:
 *                  $ref: '#/components/schemas/Vehicle'
 */

vehicleRouter.post('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const vehicle = <VehicleInput>req.body;
        const result = await vehicleService.createVehicle(vehicle);
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
});

vehicleRouter.get('/:id', async (req: Request, res: Response, next: NextFunction) => { 
    try {
        const driver = await vehicleService.getVehicleById(Number(req.params.id));
        res.status(200).json(driver);
    } catch (error) {
        next(error);
    }
});
export {vehicleRouter}