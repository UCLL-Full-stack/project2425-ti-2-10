import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import { set } from 'date-fns';
import { connect } from 'http2';
import { vehicleRouter } from '../controller/vehicle.routes';

// Execute: npx ts-node util/seed.ts

const prisma = new PrismaClient();

const main = async () => {
    await prisma.driver.deleteMany();
    await prisma.customer.deleteMany();
    await prisma.manager.deleteMany();
    await prisma.ride.deleteMany();
    await prisma.review.deleteMany();
    await prisma.vehicle.deleteMany();
    await prisma.user.deleteMany();
    console.log('seed run')

    const review1 = await prisma.review.create({
        data : {
            text: "Pleasant ride",
            rating: 5,
        }
    });
    
    const review2 = await prisma.review.create({
        data : {
            text: "The driver was calling all the time",
            rating: 3,
        }
    });

    const review3 = await prisma.review.create({
        data : {
            text: "The driver was too aggressive on the road.",
            rating: 2,
        }
    });

    const review4 = await prisma.review.create({
        data : {
            text: "The driver was 20 minutes late",
            rating: 1,
        }
    });

    const matthias = await prisma.user.create({
        data : { 
            firstName: "Matthias",
            lastName: "Poelmans",
            birthday: new Date(2002, 6, 11),
            email: "matthias.poelmans@ucll.be",
            phoneNumber: "+32495678901",
            role: "driver"

        }
    });

    const sophie = await prisma.user.create({
        data: { 
            firstName: "Sophie",
            lastName: "Vermeulen",
            birthday: new Date(1990, 5, 15),
            email: "sophie.vermeulen@ucll.be",
            phoneNumber: "+32498671234",
            role: "customer"
        }
    });
    
    const thomas = await prisma.user.create({
        data: { 
            firstName: "Thomas",
            lastName: "De Smet",
            birthday: new Date(1985, 2, 20),
            email: "thomas.desmet@ucll.be",
            phoneNumber: "+32476543210",
            role: "driver"
        }
    });
    
    const emma = await prisma.user.create({
        data: { 
            firstName: "Emma",
            lastName: "Van den Broeck",
            birthday: new Date(1993, 7, 10),
            email: "emma.vandenbroeck@ucll.be",
            phoneNumber: "+32494561234",
            role: "manager"
        }
    });
    
    const lucas = await prisma.user.create({
        data: { 
            firstName: "Lucas",
            lastName: "Janssens",
            birthday: new Date(1998, 11, 5),
            email: "lucas.janssens@ucll.be",
            phoneNumber: "+32495876543",
            role: "customer"
        }
    });
    
    const marie = await prisma.user.create({
        data: { 
            firstName: "Marie",
            lastName: "Peeters",
            birthday: new Date(2000, 4, 25),
            email: "marie.peeters@ucll.be",
            phoneNumber: "+32492345678",
            role: "driver"
        }
    });
    

    
    
    const driver = await prisma.driver.create({
        data: {
            user: {connect: {id: matthias.id}},
            reviews: {connect: [{id: review1.id},{id: review2.id}]}
        }
    });

    const driver2 = await prisma.driver.create({
        data: {
            user: {connect: {id: marie.id}},
            reviews: {connect: [{id: review3.id}]}
        }
    });

    const driver3 = await prisma.driver.create({
        data: {
            user: {connect: {id: thomas.id}},
            reviews: {connect: [{id: review4.id}]}
        }
    });

    const customer = await prisma.customer.create({
        data: {
            user: {connect: {id: lucas.id}}
        }
    });

    const customer2 = await prisma.customer.create({
        data: {
            user: {connect: {id: sophie.id}}
        }
    });

    const manager = await prisma.manager.create({
        data: {
            user: {connect: {id: emma.id}}
        }
    });

    const car1 = await prisma.vehicle.create({
        data: {
            chassisnumber: "1HGCM82633A123456",
            brand: "Volkswagen",
            licenseplate: "1-ABC-123"
        }
    });
    
    const car2 = await prisma.vehicle.create({
        data: {
            chassisnumber: "JH4KA8260MC005678",
            brand: "BMW",
            licenseplate: "2-XYZ-456"
        }
    });
    
    const car3 = await prisma.vehicle.create({
        data: {
            chassisnumber: "WBA3A5C51CF543210",
            brand: "Audi",
            licenseplate: "3-GHI-789"
        }
    });
    
    const car4 = await prisma.vehicle.create({
        data: {
            chassisnumber: "WDBJF65J1YB123987",
            brand: "Mercedes-Benz",
            licenseplate: "4-JKL-012"
        }
    });
    
    const car5 = await prisma.vehicle.create({
        data: {
            chassisnumber: "KM8J3CA46GU123654",
            brand: "Toyota",
            licenseplate: "5-MNO-345"
        }
    });

    const ride1 = await prisma.ride.create({
        data: {
            startLocation: "Leuven Stationstraat 33",
            date: new Date(17,12,2024),
            destination: "Brussel centraal station", 
            driver:{connect: {id:driver.id}},
            customer:{connect: {id:customer.id}},
            vehicle: {connect: {id:car1.id}}
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
