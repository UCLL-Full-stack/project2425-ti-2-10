
import { Customer } from "../../model/customer";
import { Manager } from "../../model/manager";
import { Driver } from "../../model/driver";
import { Review } from "../../model/review";
import { Ride } from "../../model/ride";
import { User } from "../../model/user";

const birthDate = new Date("2024-11-11");
    const firstName = "manager";
    const lastName = "test";
    const email = "manager@test.com";
    const phoneNumber = "+32497896757";
    const user = new User({ firstName, lastName, birthday: birthDate, email, phoneNumber,role: "manager",password:"secret" });


test('given: valid values for manager, when: manager is created, then: manager is created with those values', () => {
    // given
    

    // when
    const manager = new Manager({ user, rides: [] });

    // then
    expect(manager.getUser()).toEqual(user);
});