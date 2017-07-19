// Ingredient model to be used as a shared class
export class Ingredient {
    public name: string;
    public amount: number;

    constructor (name: string, amount: number) {
        this.name = name;
        this.amount = amount;
    }
}
