import { Ride } from "../../model/ride";
import { Vehicle } from "../../model/vehicle";


// given
    const chassisnumber = "123ABC456";
    const brand = "Toyota";
    const licenseplate = "ABC-1234";
    const rides: Ride[] = [];


test('given: valid values for vehicle, when: vehicle is created, then: vehicle is created with those values', () => {
    

    // when
    const vehicle = new Vehicle({ chassisnumber, brand, licenseplate, rides });

    // then
    expect(vehicle.getChassisNumber()).toEqual(chassisnumber);
    expect(vehicle.getBrand()).toEqual(brand);
    expect(vehicle.getLicenseplate()).toEqual(licenseplate);
    expect(vehicle.getRides()).toEqual(rides);
});