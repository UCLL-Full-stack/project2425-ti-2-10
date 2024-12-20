import express, { NextFunction, Request, Response } from 'express';
import customerService from '../service/customer.service';

const customerRouter = express.Router();

customerRouter.get('/:id', async (req: Request, res: Response, next: NextFunction) => { 
    try {
        const customer = await customerService.getCustomerById(Number(req.params.id));
        res.status(200).json(customer);
    } catch (error) {
        next(error);
    }
});

customerRouter.get('/:email', async (req: Request, res: Response, next: NextFunction) => { 
    try {
        const actualEmail = req.params.email.replace(/-at-/g, '@');
        console.log('backend: '+actualEmail);
        const customer = await customerService.getCustomerByEmail(actualEmail);
        res.status(200).json(customer);
    } catch (error) {
        next(error);
    }
});



export {customerRouter}