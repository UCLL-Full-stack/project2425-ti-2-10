import { User } from "../../model/user"


    const birthDate = new Date("2024-11-11");
    const firstName = "boer";
    const lastName = "spekker";
    const email = "boerspekkie@hotmail.com";
    const phonenumber = "+32497896756"

test('given: valid values for user, when: user is created, then: user is created with those values', ()=> {
    
    
    //when
    const user = new User({firstName: firstName ,lastName: lastName,birthday: birthDate,email: email,phoneNumber:phonenumber });

    //then
    expect(user.firstName).toEqual(firstName);
    expect(user.lastName).toEqual(lastName);
    expect(user.email).toEqual(email);
    expect(user.phoneNumber).toEqual(phonenumber);
    expect(user.birthday).toEqual(birthDate);
});

