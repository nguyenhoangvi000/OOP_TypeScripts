///<reference path='../Animal/animal.ts'/>
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
//# sourceMappingURL=cat.js.map