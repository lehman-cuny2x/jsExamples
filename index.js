/* JavaScript Expressions

A JS expression is code snippet that evaluates to a value.

*/
let y = 1 + 1

let name1 = 'Hello' + " " + "Lehman";

let name3 = name1;

function test(name2){
    console.log("hello " + name2);
}

name1 = test("Mary");


/*
What are the two types of react components?
1. Class component
2. Function component



ES6 introduced classes.
In ES6, we create classes using the keyword class. The properties of the 
class are assigned inside the constructor method of the class.

Let us see the example of a class below
*/

class Car{

    constructor(name){
        // This is used to assign properties of the Car class
        this.brand = name;
    }

    //You can be able to add methods in the class
    display(){
        return "My car is a " + this.brand;
    }
}

// Create an object of the Car class


/* Inheritance in ES6. We can be able to create a class that inherits from
another class.
We use the extends keyword for inheritance.
*/

class Model extends Car{
    constructor(name, mod){
        super(name);
        this.model = mod;
    }

    show(){
        return this.display() + "Model:" + this.model;
    }
}

myCar = new Model("Ford", "F-150");
console.log(myCar.show());