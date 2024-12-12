import { Customer } from "./customer";
import { Driver } from "./driver";

export class Review{
    private id?: number;
    private rating: number;
    private text: string;
    private driver?: Driver;

    constructor( review: { id?: number; rating: number;text: string;}){
        this.validate(review);
        
        this.id = review.id;
        this.rating = review.rating;
        this.text = review.text;     
    }
    validate(review: { id?: number; rating: number;text: string;}) {
        if (!review.rating) { 
            throw new Error('Rating is required');
        }
        if (review.rating > 5 || review.rating < 0){ // moet tussen 0 en 5 zijn
            throw new Error("Rating is always between 0 and 5.")
        }
        if (!review.text){
            throw new Error('Text is required with a review.')
        }

    }

    getId(): number | undefined {
        return this.id;
    }
    getRating(): number{
        return this.rating;
    }
    getText(): string{
        return this.text;
    }
    getDriver(): Driver | undefined{
        return this.driver;
    }
    
    
}