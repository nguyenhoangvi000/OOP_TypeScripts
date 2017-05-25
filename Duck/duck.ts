///<reference path='../Animal/animal.ts'/>

class Duck implements IAnimal {
    private _name: String;

    getName(): String {
        return this._name;
    }

    sayHello(): void {
        console.log("Quack quack");
    }

    constructor();
    constructor(name: String = "Vit") {
        this._name = name;
    }
}