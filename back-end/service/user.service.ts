import { User } from "../model/user";
import bcrypt from 'bcrypt';
import { AuthenticationResponse, UserInput } from "../types";
import userDb from "../repository/user.db";
import { addISOWeekYears } from "date-fns";
import { generateJwtToken } from "../util/jwt";



const createUser = async ({firstName, lastName, birthday, email, phoneNumber,password,role}: UserInput): Promise<User> => {
    const existing = await userDb.getUserByEmail({email});
    if(existing){
        throw new Error('User with email ' + email + ' does not exist in the database.')
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = new User({firstName,lastName,birthday,email, phoneNumber,password: hashedPassword,role})
    return await userDb.createUser(user);
}

const authenticate = async ({ email, password }: UserInput): Promise<AuthenticationResponse> => {
    const user = await getUserByEmail({email});
    console.log(user)
    const isValidPassword = await bcrypt.compare(password, user.getPassword());

    if (!isValidPassword) {
        throw new Error('Incorrect password.');
    }
    return {
        token: generateJwtToken({ email, role: user.getRole() }),
        email: email,
        role: user.getRole(),
    };
};

const getUserByEmail = async ({email}: {email: string}) : Promise<User> => {
    const user = await userDb.getUserByEmail({ email });
    if (!user){
        throw new Error('User witg email '+email+' does not exist in the database')
    } 
    return user;
}

export 
    default{createUser,authenticate};