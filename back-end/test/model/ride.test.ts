import { Customer } from "../../model/customer";
import { Driver } from "../../model/driver";
import { Manager } from "../../model/manager";
import { Ride } from "../../model/ride";
import { User } from "../../model/user";
import { Vehicle } from "../../model/vehicle";

    //given
    const birthDate = new Date("2024-11-11");
    const driverUser = new User({ firstName: "driver", lastName: "test", birthday: birthDate, email: "driver@test.com", phoneNumber: "+32497896758",role: 'driver' });
    const customerUser = new User({ firstName: "customer", lastName: "test", birthday: birthDate, email: "customer@test.com", phoneNumber: "+32497896759",role:'customer' });
    

    const driver = new Driver({ id: 1, user: driverUser });
    const customer = new Customer({ id: 2, user: customerUser });
    const vehicle = new Vehicle({id: 1,chassisnumber: "JQMGOJHQ88", brand: "Rolls Royce",  licenseplate: "1-ABC-123"})
    const startLocation = "Start Point";
    const date = new Date();
    const destination = "Destination Point";

test('given: valid values for ride, when: ride is created, then: ride is created with those values', () => {
    
    

    // when
    const ride = new Ride({ startLocation, date, destination, driver, customer, vehicle: vehicle });

    // then
    expect(ride.getStartLocation()).toEqual(startLocation);
    expect(ride.getDate()).toEqual(date);
    expect(ride.getDestination()).toEqual(destination);
    expect(ride.getDriver()).toEqual(driver);
    expect(ride.getCustomer()).toEqual(customer);
    expect(ride.getVehicle()).toEqual(vehicle);
});