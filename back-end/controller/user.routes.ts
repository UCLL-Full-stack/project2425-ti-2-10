

/**
 * @swagger
 *   components:
 *    securitySchemes:
 *     bearerAuth:
 *      type: http
 *      scheme: bearer
 *      bearerFormat: JWT
 *    schemas:
 *      AuthenticationResponse:
 *          type: object
 *          properties:
 *            message:
 *              type: string
 *              description: Authentication response.
 *            token:
 *              type: string
 *              description: JWT access token.
 *            email:
 *              type: string
 *              description: User email.
 *      AuthenticationRequest:
 *          type: object
 *          properties:
 *            email:
 *              type: string
 *              description: User email.
 *            password:
 *              type: string
 *              description: User password.
 *      User:
 *          type: object
 *          properties:
 *            id:
 *              type: number
 *              format: int64
 *            firstName:
 *              type: string
 *              description: First name.
 *            lastName:
 *              type: string
 *              description: Last name.
 *            birthday:
 *              type: Date
 *              description: User birthday
 *            email:
 *              type: string
 *              description: E-mail.
 *            phonenumber:
 *              type: string
 *              description: phonenumber.
 *            password:
 *              type: string
 *              description: User password.
 *            role:
 *               $ref: '#/components/schemas/Role'
 *      UserInput:
 *          type: object
 *          properties:
 *            firstName:
 *              type: string
 *              description: User firstname.
 *            lastName:
 *              type: string
 *              description: User lastname.
 *            birthday:
 *              type: Date
 *              description: User birthday.
 *            email:
 *              type: string
 *              description: User email.
 *            phonenumber:
 *              type: string
 *              description: Phonenumber.
 *            password:
 *              type: string
 *              description: User password.
 *            role:
 *               $ref: '#/components/schemas/Role'
 *      Role:
 *          type: string
 *          enum: [customer, driver, manager]
 */
import express, { NextFunction, Request, Response } from 'express';
import driverService from '../service/driver.service';
import { UserInput } from '../types';
import userService from '../service/user.service';


const userRouter = express.Router();

/**
 * @swagger
 * /users/signup:
 *   post:
 *     summary: Register a new user.
 *     description: Create a new user by providing their details.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserInput'
 *     responses:
 *       200:
 *         description: The newly created user.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserInput'
 *    
 */

userRouter.post('/signup', async (req: Request , res: Response, next: NextFunction) => {
    try {
    console.log("trying to create user.")
    const userInput = <UserInput>req.body;
    const newUser = await userService.createUser(userInput);
    res.status(200).json(newUser);
}   catch(error){
    next(error) 
    }
    }
);

/**
 * @swagger
 * /users/login:
 *   post:
 *     summary: Authenticate a user.
 *     description: Log in an existing user by providing their credentials.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserInput'
 *     responses:
 *       200:
 *         description: Authentication successful.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Authentication success
 *                 token:
 *                   type: string
 *                   description: The JWT token for the authenticated user.
 *                 user:
 *                   $ref: '#/components/schemas/UserInput'
 *       401:
 *         description: Authentication failed. Invalid credentials.
 *       500:
 *         description: Internal server error.
 */

userRouter.post('/login', async (req: Request , res: Response, next: NextFunction) => {
    try {
        const userInput = <UserInput>req.body
        console.log(userInput)
        const response = await userService.authenticate(userInput);
        res.status(200).json({message: 'Authentication succes', ...response});
    }
    catch(error){
        next(error);
    }
});
export {userRouter}