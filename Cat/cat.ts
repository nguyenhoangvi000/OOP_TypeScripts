///<reference path='../Animal/animal.ts'/>

class Cat implements IAnimal {

    private _name: String;

    getName(): String {
        return this._name;
    }

    sayHello(): void {
        console.log("Meo Meo");
    }

    constructor();

    constructor(name: String = "Meo") {
        this._name = name;
    }
}