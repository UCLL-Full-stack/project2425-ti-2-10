import { Customer } from "../model/customer";
import database from "./database";

const getCustomerById = async ({ id }: { id: number }): Promise<Customer | null> => {
    try {
        const customertPrisma = await database.customer.findUnique({
            where: { id },
            include: { user: true },
        });

        return customertPrisma ? Customer.from(customertPrisma) : null;
    } catch (error) {
        console.error(error);
        throw new Error('Database error. See server log for details.');
    }
};


export default{getCustomerById}