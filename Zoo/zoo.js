///<reference path='../Animal/animal.ts'/>
var Zoo = (function () {
    function Zoo() {
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
//# sourceMappingURL=zoo.js.map