import { Review } from "../../model/review";

// given
    const rating = 5;
    const text = "Excellent service!";
    const id = 1;

test('given: valid values for review, when: review is created, then: review is created with those values', () => {
    

    // when
    const review = new Review({ id,rating, text });

    // then
    expect(review.getRating()).toEqual(rating);
    expect(review.getText()).toEqual(text);
});