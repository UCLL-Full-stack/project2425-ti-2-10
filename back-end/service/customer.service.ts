import { Customer } from "../model/customer";
import customerDb from "../repository/customer.db";

const getCustomerById = async (id: number): Promise<Customer> => {
    const driver = await customerDb.getCustomerById({ id });
    if (!driver) throw new Error(`Driver with id ${id} does not exist.`);
    return driver;
}

const getCustomerByEmail = async (email: string): Promise<Customer> => {
    const driver = await customerDb.getCustomerByEmail({ email});
    if (!driver) throw new Error(`Driver with id ${email} does not exist.`);
    return driver;
}

export default{getCustomerById,getCustomerByEmail}