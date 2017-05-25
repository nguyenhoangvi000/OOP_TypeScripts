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
//# sourceMappingURL=duck.js.map