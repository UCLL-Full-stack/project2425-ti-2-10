/**
 * @swagger
 *   components:
 *    schemas:
 *      Driver:
 *          type: object
 *          properties:
 *            id:
 *              type: number
 *              format: int64
 *            user:
 *              $ref: '#/components/schemas/User'
 *            reviews:
 *              type: array
 *              items:
 *                  $ref: '#/components/schemas/Review'
 *      DriverInput:
 *          type: object
 *          properties:
 *            user:
 *              type: object
 *              properties:
 *                  id:
 *                      type: number
 *                      format: int64
 */



import express, { NextFunction, Request, Response } from 'express';
import driverService from '../service/driver.service';


const driverRouter = express.Router();


/**
 * @swagger
 * /drivers:
 *   get:
 *     summary: Get a list of all drivers.
 *     responses:
 *       200:
 *         description: A list of all stored drivers.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Driver'
 */

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