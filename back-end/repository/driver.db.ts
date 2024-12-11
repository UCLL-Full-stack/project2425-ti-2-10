import { Driver } from "../model/driver";
import { Ride } from "../model/ride";

const drivers: Driver[] = [
    new Driver({
        id: 1,
        firstName: 'Mike',
        lastName: 'Wazowsky',
        birthday: new Date('1985-05-15'), 
        email: 'Mike.Wazowsky@gmail.com',
        phoneNumber: '0496123456',
        rides: [new Ride({
            id: 1,
            startLocation: 'Main Street',
            date: new Date('2024-01-15T10:00:00'), // January 15, 2024
            destination: 'Downtown',
            vehicle : undefined,

        })],
        reviews: [],
    }),
    new Driver({
        id: 2,
        firstName: 'Sully',
        lastName: 'Monstropolis',
        birthday: new Date('1990-07-20'), // July 20, 1990
        email: 'Sully.Monstropolis@gmail.com',
        phoneNumber: '0496123457',
        rides: [],
        reviews: [],
    }),
    new Driver({
        id: 3,
        firstName: 'Boo',
        lastName: 'Wazowski',
        birthday: new Date('1995-03-10'), // March 10, 1995
        email: 'Boo.Wazowski@gmail.com',
        phoneNumber: '0496123458',
        rides: [],
        reviews: [],
    }),
    new Driver({
        id: 4,
        firstName: 'Randall',
        lastName: 'Boggs',
        birthday: new Date('1992-11-30'), // November 30, 1992 (still in 2024 before November)
        email: 'Randall.Boggs@gmail.com',
        phoneNumber: '0496123459',
        rides: [],
        reviews: [],
    }),
    new Driver({
        id: 5,
        firstName: 'Celia',
        lastName: 'Mae',
        birthday: new Date('1988-01-25'), // January 25, 1988
        email: 'Celia.Mae@gmail.com',
        phoneNumber: '0496123460',
        rides: [],
        reviews: [],
    })
];

const getAllDrivers = (): Driver[] => drivers;

const createDriver = ({firstName, lastName, birthday, email, phoneNumber}: Driver): Driver => {
    const driver = new Driver({firstName, lastName, birthday, email, phoneNumber, rides: [], reviews:[]});
    drivers.push(driver);
    return driver;
}


export default{
    getAllDrivers,createDriver
}
