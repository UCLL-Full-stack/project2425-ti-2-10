import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import { set } from 'date-fns';
import { connect } from 'http2';
import { vehicleRouter } from '../controller/vehicle.routes';

// Execute: npx ts-node util/seed.ts

const prisma = new PrismaClient();

const main = async () => {
    await prisma.ride.deleteMany();
    await prisma.driver.deleteMany();
    await prisma.customer.deleteMany();
    await prisma.manager.deleteMany();
    
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

    const review5 = await prisma.review.create({
    data: {
        text: "Very nice and polite driver",
        rating: 5,
        }
    });

    const review6 = await prisma.review.create({
        data: {
            text: "The driver took a wrong turn, but nice overall",
            rating: 4,
        }
    });

    const review7 = await prisma.review.create({
        data: {
            text: "Driver was not paying attention to the road",
            rating: 2,
        }
    });

    const review8 = await prisma.review.create({
        data: {
            text: "Excellent service, on time and friendly driver",
            rating: 5,
        }
    });

    const review9 = await prisma.review.create({
        data: {
            text: "The driver was using his phone while driving",
            rating: 1,
        }
    });

    const review10 = await prisma.review.create({
        data: {
            text: "Very comfortable ride, recommended",
            rating: 5,
        }
    });

    const review11 = await prisma.review.create({
        data: {
            text: "Driver was speeding, but arrived safely",
            rating: 3,
        }
    });

    const review12 = await prisma.review.create({
        data: {
            text: "The driver helped me with my luggage",
            rating: 5,
        }
    });

    const review13 = await prisma.review.create({
        data: {
            text: "Driver took a long route, increased fare",
            rating: 2,
        }
    });

    const review14 = await prisma.review.create({
        data: {
            text: "Excellent communication from the driver",
            rating: 5,
        }
    });


    const matthias = await prisma.user.create({
        data : { 
            firstName: "Matthias",
            lastName: "Poelmans",
            birthday: new Date(2002, 6, 11),
            email: "matthias.poelmans@ucll.be",
            phoneNumber: "+32495678901",
            password: await bcrypt.hash("secret11", 12),
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
            password: await bcrypt.hash("secret11", 12),
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
            password: await bcrypt.hash("secret11", 12),
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
            password: await bcrypt.hash("secret11", 12),
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
            password: await bcrypt.hash("secret11", 12),
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
            password: await bcrypt.hash("secret11", 12),
            role: "driver"
        }
    });
    
    const benoit = await prisma.user.create({
        data: { 
            firstName: "Benoit",
            lastName: "Stroobants",
            birthday: new Date(2002, 1, 22),
            email: "benoit.stroobants@student.ucll.be",
            phoneNumber: "+32470958816",
            password: await bcrypt.hash("secret11", 12),
            role: "driver"
        }
    });

    const julia = await prisma.user.create({
        data: { 
            firstName: "Julia",
            lastName: "De Clercq",
            birthday: new Date(1995, 1, 20),
            email: "julia.declercq@ucll.be",
            phoneNumber: "+32487654321",
            password: await bcrypt.hash("secret11", 12),
            role: "driver"
        }
    });

    const sam = await prisma.user.create({
        data: { 
            firstName: "Sam",
            lastName: "Verstraeten",
            birthday: new Date(1988, 6, 10),
            email: "sam.verstraeten@ucll.be",
            phoneNumber: "+32494567890",
            password: await bcrypt.hash("secret11", 12),
            role: "driver"
        }
    });

    const eva = await prisma.user.create({
        data: { 
            firstName: "Eva",
            lastName: "Janssens",
            birthday: new Date(2001, 3, 25),
            email: "eva.janssens@ucll.be",
            phoneNumber: "+32491234567",
            password: await bcrypt.hash("secret11", 12),
            role: "driver"
        }
    });

    const daniel = await prisma.user.create({
        data: { 
            firstName: "Daniel",
            lastName: "Peeters",
            birthday: new Date(1982, 8, 15),
            email: "daniel.peeters@ucll.be",
            phoneNumber: "+32487654321",
            password: await bcrypt.hash("secret11", 12),
            role: "driver"
        }
    });

    const laura = await prisma.user.create({
        data: { 
            firstName: "Laura",
            lastName: "Dierckx",
            birthday: new Date(1996, 5, 20),
            email: "laura.dierckx@ucll.be",
            phoneNumber: "+32494561234",
            password: await bcrypt.hash("secret11", 12),
            role: "driver"
        }
    });
    
    const anna = await prisma.user.create({
        data: { 
            firstName: "Anna",
            lastName: "De Vries",
            birthday: new Date(1997, 8, 12),
            email: "anna.devries@ucll.be",
            phoneNumber: "+32496789012",
            password: await bcrypt.hash("secret11", 12),
            role: "customer"
        }
    });
    
    const lars = await prisma.user.create({
        data: { 
            firstName: "Lars",
            lastName: "Peeters",
            birthday: new Date(1996, 3, 20),
            email: "lars.peeters@ucll.be",
            phoneNumber: "+32496874531",
            password: await bcrypt.hash("secret11", 12),
            role: "customer"
        }
    });
    
    const hanna = await prisma.user.create({
        data: { 
            firstName: "Hanna",
            lastName: "Martens",
            birthday: new Date(1994, 11, 4),
            email: "hanna.martens@ucll.be",
            phoneNumber: "+32497785632",
            password: await bcrypt.hash("secret11", 12),
            role: "customer"
        }
    });
    
    const nathan = await prisma.user.create({
        data: { 
            firstName: "Nathan",
            lastName: "Govaerts",
            birthday: new Date(1995, 2, 28),
            email: "nathan.govaerts@ucll.be",
            phoneNumber: "+32498374562",
            password: await bcrypt.hash("secret11", 12),
            role: "customer"
        }
    });
    
    const zoe = await prisma.user.create({
        data: { 
            firstName: "Zoe",
            lastName: "Declercq",
            birthday: new Date(1999, 1, 10),
            email: "zoe.declercq@ucll.be",
            phoneNumber: "+32495437621",
            password: await bcrypt.hash("secret11", 12),
            role: "customer"
        }
    });
    
    const oliver = await prisma.user.create({
        data: { 
            firstName: "Oliver",
            lastName: "Baert",
            birthday: new Date(1992, 6, 19),
            email: "oliver.baert@ucll.be",
            phoneNumber: "+32493216754",
            password: await bcrypt.hash("secret11", 12),
            role: "customer"
        }
    });
    
    const ilse = await prisma.user.create({
        data: { 
            firstName: "Ilse",
            lastName: "Schrevens",
            birthday: new Date(1998, 9, 8),
            email: "ilse.schrevens@ucll.be",
            phoneNumber: "+32496741256",
            password: await bcrypt.hash("secret11", 12),
            role: "customer"
        }
    });
    
    const jens = await prisma.user.create({
        data: { 
            firstName: "Jens",
            lastName: "De Wilde",
            birthday: new Date(1993, 4, 14),
            email: "jens.dewilde@ucll.be",
            phoneNumber: "+32493567890",
            password: await bcrypt.hash("secret11", 12),
            role: "customer"
        }
    });

    const stefan = await prisma.user.create({
        data: { 
            firstName: "Stefan",
            lastName: "Van Damme",
            birthday: new Date(1991, 10, 25),
            email: "stefan.vandamme@ucll.be",
            phoneNumber: "+32493214567",
            password: await bcrypt.hash("secret11", 12),
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

    const driver4 = await prisma.driver.create({
        data: {
            user: {connect: {id: benoit.id}},
            reviews: { connect: [{ id: review5.id }, { id: review6.id }] }
        }
    });

    const driver5 = await prisma.driver.create({
        data: {
            user: {connect: {id: julia.id}},
            reviews: { connect: [{ id: review7.id }] }
        }
    });

    const driver6 = await prisma.driver.create({
        data: {
            user: {connect: {id: stefan.id}},
            reviews: { connect: [{ id: review8.id }] }
        }
    });
    
    const driver7 = await prisma.driver.create({
        data: {
            user: {connect: {id: sam.id}},
            reviews: { connect: [{ id: review9.id }] }
        }
    });
    
    const driver8 = await prisma.driver.create({
        data: {
            user: {connect: {id: eva.id}},
            reviews: { connect: [{ id: review10.id }, { id: review11.id }] }
        }
    });
    
    const driver9 = await prisma.driver.create({
        data: {
            user: {connect: {id: daniel.id}},
            reviews: { connect: [{ id: review12.id }] }
        }
    });
    
    const driver10 = await prisma.driver.create({
        data: {
            user: {connect: {id: laura.id}},
            reviews: { connect: [{ id: review13.id }, { id: review14.id }] }
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

    const customer3 = await prisma.customer.create({
        data: {
            user: {connect: {id: anna.id}}
        }
    });
    
    const customer4 = await prisma.customer.create({
        data: {
            user: {connect: {id: lars.id}}
        }
    });
    
    const customer5 = await prisma.customer.create({
        data: {
            user: {connect: {id: hanna.id}}
        }
    });
    
    const customer6 = await prisma.customer.create({
        data: {
            user: {connect: {id: nathan.id}}
        }
    });
    
    const customer7 = await prisma.customer.create({
        data: {
            user: {connect: {id: zoe.id}}
        }
    });
    
    const customer8 = await prisma.customer.create({
        data: {
            user: {connect: {id: oliver.id}}
        }
    });
    
    const customer9 = await prisma.customer.create({
        data: {
            user: {connect: {id: ilse.id}}
        }
    });
    
    const customer10 = await prisma.customer.create({
        data: {
            user: {connect: {id: jens.id}}
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
