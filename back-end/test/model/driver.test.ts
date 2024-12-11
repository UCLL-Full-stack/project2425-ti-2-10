import { Driver } from "../../model/driver";
import { User } from "../../model/user";

// given
    const birthDate = new Date("2024-11-11");
    const firstName = "driver";
    const lastName = "test";
    const email = "driver@test.com";
    const phoneNumber = "+32497896758";
    const user = new User({ firstName, lastName, birthday: birthDate, email, phoneNumber });

test('given: valid values for driver, when: driver is created, then: driver is created with those values', () => {
    

    // when
    const driver = new Driver({ user });

    // then
    expect(driver.getUser()).toEqual(user);
    expect(driver.getRides()).toBeUndefined();
    expect(driver.getReviews()).toBeUndefined();
});