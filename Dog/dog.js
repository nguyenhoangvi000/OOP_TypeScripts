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
//# sourceMappingURL=dog.js.map