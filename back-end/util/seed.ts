import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import { set } from 'date-fns';

// Execute: npx ts-node util/seed.ts

const prisma = new PrismaClient();

const main = async () => {
    //await prisma.driver.deleteMany();
    //await prisma.customer.deleteMany();
    //await prisma.manager.deleteMany();
    //await prisma.ride.deleteMany();
    //await prisma.review.deleteMany();
    //await prisma.vehicle.deleteMany();
    //await prisma.user.deleteMany();
    console.log('seed run')

    const matthias = await prisma.user.create({
        data : { 
            firstName: "Matthias",
            lastName: "Poelmans",
            birthday: new Date(),
            email: "matthias.poelmans@ucll.be",
            phoneNumber: "+32495678901",
            role: "manager"

        }
    });
    
    const driver = await prisma.driver.create({
        data: {
            user: {connect: {id: matthias.id}}
        }
    })

}

(async () => {
    try {
        await main();
        await prisma.$disconnect();
    } catch (error) {
        console.error(error);
        await prisma.$disconnect();
        process.exit(1);
    }
})();
