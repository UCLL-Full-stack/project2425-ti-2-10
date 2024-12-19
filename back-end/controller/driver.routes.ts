/**
 * @swagger
 *   components:
 *    securitySchemes:
 *     bearerAuth:
 *      type: http
 *      scheme: bearer
 *      bearerFormat: JWT
 *    schemas:
 *      
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
 *      reviewToDriverInput:
 *          type: object
 *          properties:
 *              driver:
 *                type: object
 *                properties:
 *                    id:
 *                      type: number
 *                      format: int64
 *              review:
 *                type: object
 *                properties:
 *                    id:
 *                      type: number
 *                      format: int64
 *      Review:
 *          type: object
 *          properties:
 *            id:
 *              type: number
 *              format: int64
 *            text:
 *              type: string
 *              description: comment on the review.
 *            rating:
 *              type: number
 *              description: rate 0 - 5.
 */



import express, { NextFunction, Request, Response } from 'express';
import driverService from '../service/driver.service';
import { reviewToDriverInput } from '../types';


const driverRouter = express.Router();


/**
 * @swagger
 * /drivers:
 *   get:
 *     security:
 *         - bearerAuth: []
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

/**
 * @swagger
 * /drivers/review:
 *   post:
 *      security:
 *       - bearerAuth: []
 *      summary: give review to a driver.
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/reviewToDriverInput'
 *      responses:
 *         200:
 *            description: The driver with all reviews.
 *            content:
 *              application/json:
 *                schema:
 *                  $ref: '#/components/schemas/Driver'
 */
driverRouter.post('/review', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const input = <reviewToDriverInput>req.body;
        const result = await driverService.addReviewToDriver(input);
        res.status(200).json(result);
    } catch (error) {
        next(error);
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