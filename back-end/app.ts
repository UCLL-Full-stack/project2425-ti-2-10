import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import * as bodyParser from 'body-parser';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { driverRouter } from './controller/driver.routes'
import {rideRouter} from './controller/ride.routes'
import { customerRouter } from './controller/customer.routes';
import { managerRouter } from './controller/manager.routes';
import { reviewRouter } from './controller/review.routes';
import { userRouter } from './controller/user.routes';
import { vehicleRouter } from './controller/vehicle.routes';
  
const app = express();
dotenv.config();
const port = process.env.APP_PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/drivers', driverRouter );
app.use('/rides', rideRouter);
app.use('/customers', customerRouter);
app.use('/manager', managerRouter);
app.use('/reviews',reviewRouter);
app.use('/users', userRouter);
app.use('/vehicles', vehicleRouter);



app.get('/status', (req, res) => {
    res.json({ message: 'Back-end is running...' });
});

app.listen(port || 3000, () => {
    console.log(`Back-end is running on port ${port}.`);
});
