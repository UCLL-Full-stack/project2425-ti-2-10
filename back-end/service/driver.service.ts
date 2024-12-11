import { Driver } from "../model/driver";
import driverDb from "../repository/driver.db";


const createDriver = ({firstName, lastName, birthday, email, phoneNumber}: DriverInput): Driver => {
    const driver = new Driver({firstName, lastName, birthday, email, phoneNumber, rides: [], reviews:[]});
    return driverDb.createDriver(driver);
}
const getAllDrivers = (): Driver[] => {
    return driverDb.getAllDrivers();
}

export default{createDriver,getAllDrivers};