import { Driver } from "../model/driver";
import { User } from "../model/user";
import driverDb from "../repository/driver.db";


const getAllDrivers = (): Promise<Driver[]> => {
    return driverDb.getAllDrivers();
}

export default{getAllDrivers};