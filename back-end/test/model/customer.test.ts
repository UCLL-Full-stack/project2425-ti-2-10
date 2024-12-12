import { Customer } from "../../model/customer";
import { User } from "../../model/user";

const birthDate = new Date("2024-11-11");
    const firstName = "boer";
    const lastName = "spekker";
    const email = "boerspekkie@hotmail.com";
    const phoneNumber = "+32497896756";
    const user = new User({ firstName, lastName, birthday: birthDate, email, phoneNumber,role: 'customer' });

test('given: valid values for customer, when: customer is created, then: customer is created with those values', () => {
    

    // when
    const customer = new Customer({ user });

    // then
    expect(customer.getUser()).toEqual(user);
});