import { Driver } from "../model/driver";
import database from './database';


import { Ride } from "../model/ride";
import { User } from "../model/user";


const getAllDrivers = async ():Promise<Driver[]> => {
    const driversPrisma = await database.driver.findMany({
        include: {
            user: true //zegt  van wat er info ook moet bijgehpuden worden
        }
    })
    return driversPrisma.map((driverPrisma) => Driver.from(driverPrisma))
};




export default{
    getAllDrivers,}
