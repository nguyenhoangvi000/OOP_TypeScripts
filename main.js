///<reference path='./Animal/animal.ts'/>
var Cat = (function () {
    function Cat(name) {
        if (name === void 0) { name = "Meo"; }
        this._name = name;
    }
    Cat.prototype.getName = function () {
        return this._name;
    };
    Cat.prototype.sayHello = function () {
        console.log("Meo Meo");
    };
    return Cat;
}());
///<reference path='../Animal/animal.ts'/>
var Zoo = (function () {
    function Zoo() {
        this._animalList = new Array();
    }
    Zoo.prototype.setAnimalList = function (IAnimal) {
        this._animalList.push(IAnimal);
    };
    Zoo.prototype.getAnimalList = function () {
        return this._animalList;
    };
    Zoo.prototype.add = function (animal) {
        this.setAnimalList(animal);
    };
    Zoo.prototype.sayHello = function () {
        for (var index = 0; index < this._animalList.length; index++) {
            this._animalList[index].sayHello();
        }
    };
    Zoo.prototype.remove = function (name) {
        var _newArray = [];
        for (var index = 0; index < this._animalList.length; index++) {
            if (this._animalList[index].getName() != name) {
                _newArray.push(this._animalList[index]);
            }
        }
        this._animalList = _newArray;
    };
    return Zoo;
}());
///<reference path='../Animal/animal.ts'/>
var Dog = (function () {
    function Dog(name) {
        if (name === void 0) { name = "Cho"; }
        this._name = name;
    }
    Dog.prototype.getName = function () {
        return this._name;
    };
    Dog.prototype.sayHello = function () {
        console.log("Gau Gau");
    };
    return Dog;
}());
///<reference path='../Animal/animal.ts'/>
var Duck = (function () {
    function Duck(name) {
        if (name === void 0) { name = "Vit"; }
        this._name = name;
    }
    Duck.prototype.getName = function () {
        return this._name;
    };
    Duck.prototype.sayHello = function () {
        console.log("Quack quack");
    };
    return Duck;
}());
///<reference path='./Animal/animal.ts'/>
///<reference path='./Cat/cat.ts'/>
///<reference path='./Zoo/zoo.ts'/>
///<reference path='./Dog/dog.ts'/>
///<reference path='./Duck/duck.ts'/>
var Startup = (function () {
    function Startup() {
    }
    Startup.main = function () {
        var cat = new Cat();
        var dog = new Dog();
        var duck = new Duck();
        var zoo = new Zoo();
        zoo.add(cat);
        zoo.add(dog);
        zoo.add(duck);
        zoo.sayHello();
        return 0;
    };
    return Startup;
}());
Startup.main();
