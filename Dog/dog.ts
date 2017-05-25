///<reference path='../Animal/animal.ts'/>

class Dog implements IAnimal {
    private _name: String;

    getName(): String {
        return this._name;
    }

    sayHello(): void {
        console.log("Gau Gau");
    }
    constructor();
    constructor(name: String = "Cho") {
        this._name = name;
    }
}