import next from "next";
import { User } from "../model/user";
import database from "./database";

const getUserByEmail = async ({ email }: { email: string }): Promise<User | null> => {
    try {
        const userPrisma = await database.user.findFirst({
            where: { email },
        });

        return userPrisma ? User.from(userPrisma) : null;
    } catch (error) {
        console.error(error);
        throw new Error('Database error. See server log for details.');
    }
};


const createUser = async (user: User): Promise<User>=> {
        try {
            const userPrisma = await database.user.create({
            data: {firstName: user.getFirstName(),
                lastName: user.getLastName(),
                birthday: user.getBirthday(),
                email: user.getEmail(),
                phoneNumber: user.getPhoneNumber(),
                role: user.getRole(), 
                password: user.getPassword()
            }
        });

        return User.from(userPrisma);
         }
        catch (error){
            console.log(error);
            throw error;
        }
    }

    export 
    default{createUser, getUserByEmail}