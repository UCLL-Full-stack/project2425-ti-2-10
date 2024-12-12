import { Driver } from "../model/driver";
import { Ride } from "../model/ride";
import { User } from "../model/user";

const drivers: Driver[] = [
    new Driver({
        id: 1,
        user: new User({firstName: 'Mike',
            lastName: 'Wazowsky',
             birthday: new Date('1985-05-15'),
             email: 'Mike.Wazowsky@gmail.com',
             phoneNumber: '0496123456',
             role: 'driver'}),
             rides: [],
             reviews: []
            }),
            
    new Driver({
        id: 2,
        user: new User({firstName: 'Sully',
        lastName: 'Monstropolis',
        birthday: new Date('1990-07-20'), // July 20, 1990
        email: 'Sully.Monstropolis@gmail.com',
        phoneNumber: '0496123457',
        role: 'driver'}),
        rides: [],
        reviews: [],
    }),
    new Driver({
        id: 3,
        user: new User({
        firstName: 'Boo',
        lastName: 'Wazowski',
        birthday: new Date('1995-03-10'), // March 10, 1995
        email: 'Boo.Wazowski@gmail.com',
        phoneNumber: '0496123458',
        role: 'driver'}),
        rides: [],
        reviews: [],
    }),
    new Driver({
        id: 4,
        user: new User({firstName: 'Randall',
        lastName: 'Boggs',
        birthday: new Date('1992-11-30'), // November 30, 1992 (still in 2024 before November)
        email: 'Randall.Boggs@gmail.com',
        phoneNumber: '0496123459',
        role: 'driver'}),
        rides: [],
        reviews: [],
    }),
    new Driver({
        id: 5,
        user: new User({firstName: 'Celia',
        lastName: 'Mae',
        birthday: new Date('1988-01-25'), // January 25, 1988
        email: 'Celia.Mae@gmail.com',
        phoneNumber: '0496123460',
        role: 'driver'}),
        rides: [],
        reviews: [],
    })
];

const getAllDrivers = (): Driver[] => drivers;




export default{
    getAllDrivers,}
