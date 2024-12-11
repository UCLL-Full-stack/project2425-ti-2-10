import { Customer } from "./customer";
import { Driver } from "./driver";

export class Review{
    private id?: number;
    private rating: number;
    private text: string;
    private driver?: Driver;

    constructor( review: { id?: number; rating: number;text: string;}){
        this.id = review.id;
        this.rating = review.rating;
        this.text = review.text;     
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