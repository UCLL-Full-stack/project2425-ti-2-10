import { Driver } from "../model/driver";
import { User } from "../model/user";
import driverDb from "../repository/driver.db";


const getAllDrivers = async (): Promise<Driver[]> => {
    return driverDb.getAllDrivers();
}
const getDriverById = async (id: number): Promise<Driver> => {
    const driver = await driverDb.getDriverById({ id });
    if (!driver) throw new Error(`Driver with id ${id} does not exist.`);
    return driver;
}

export default{getAllDrivers,getDriverById};