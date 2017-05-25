///<reference path='./Animal/animal.ts'/>
///<reference path='./Cat/cat.ts'/>
///<reference path='./Zoo/zoo.ts'/>
///<reference path='./Dog/dog.ts'/>
///<reference path='./Duck/duck.ts'/>


class Startup {

    public static main(): number {

        let cat = new Cat();
        let dog = new Dog();
        let duck = new Duck();

        let zoo = new Zoo();

        zoo.add(cat);
        zoo.add(dog);
        zoo.add(duck);

        zoo.sayHello();


        return 0;
    }
}

Startup.main();