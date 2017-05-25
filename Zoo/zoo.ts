///<reference path='../Animal/animal.ts'/>

class Zoo {
    private _animalList: Array<IAnimal>;

    setAnimalList(IAnimal) {
        this._animalList.push(IAnimal);
    }

    getAnimalList(): Array<IAnimal> {
        return this._animalList;
    }

    constructor() {
        this._animalList = new Array<IAnimal>();
    }

    add(animal) {
        this.setAnimalList(animal);
    }

    sayHello() {
        for (var index = 0; index < this._animalList.length; index++) {
            this._animalList[index].sayHello();
        }
    }

    remove(name) {
        let _newArray = [];
        for (var index = 0; index < this._animalList.length; index++) {
            if (this._animalList[index].getName() != name) {
                _newArray.push(this._animalList[index]);
            }
        }
        this._animalList = _newArray;
    }

}