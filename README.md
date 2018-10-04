# Angular
learning Angular : Implementing basics such as Creating Angular components,data binding,Binding component methods to user events etc


Study notes on Interfaces:

When we use a normal function for Ex.
Snippet 1:
function printLabel(labelledObj: {label: string}){
    console.log(labelledObj.label);
}
let myObj = { size: 10, label: "Size 10 Object"};// Even though we have passed one more property i.e size: 10 its going to workbecause the required parameter has been passed. The output is: Size 10 Object
printLabel(myObj);

But when it comes to Interface:
Snippet 2:
interface LabelledValue {
    label: string; // is used to describe the requirements
}
function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);// we need not say that the obj we are passing implements the interface Labelledvalue.
Shape matters.
}Objects that we pass to the function meets the requirements listed 
let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);

Optional Properties : Case
Snippet 1:
interface SquareConfig {
    color?: string;
    width?: number;
}
function createSquare(config:SquareConfig): { color: string; area: number} {
    let newSquare = { color:"white", area: 100};
    if(config.color) {
        newSquare.color = config.color;//If config.clor- will give error that clor doesnot exist in SquareConfig.
    }
    if(config.width){
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
let mySquare = createSquare({color: "black"}); 
console.log(mySquare);

Snippet 2:
interface SquareConfig { color?: string; width?: number; } 
function createSquare(config:SquareConfig): { color: string; area: number} { 
    let newSquare = { color:"white", area: 100}; 
    if(config.color) {
         newSquare.color = config.color;//If config.clor- will give error that clor doesnot exist in SquareConfig.
         } if(config.width){ newSquare.area = config.width * config.width; } return newSquare; }
let mySquare = createSquare({ colour: "red", width: 100 });//colour is not assigned to SquareConfig and its not an assignambel parameter (Object literal may only specify known properties, but 'colour' does not exist in type 'SquareConfig'. )

INDEXABLE TYPES
interface StringArray {
    [index: number]: string;//index signature which states when a StringArray is indexed as number, it will return a String
}
let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];


CLASSES:
class Greeter {
    greeting: string;//property
    constructor(message: string) {
        this.greeting = message;
    }
    greet(){
        //method
        return "Hello, " + this.greeting;
    }
}
let greeter = new Greeter("world");//Instance of the Greeter class that calls the constructor , creating a new object with greeter shape and running the constructor to initialize it

Simple Example of Inheritance
class Animal {
    move(distanceInMeters: number = 0){
        console.log(`Animal moved ${distanceInMeters}`)
    }
}
class Dog extends Animal {
    bark(){
        console.log('Woof! Woof!');
    }
}
const dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();

Snippet 2:
class Animal {
    name: string;
    constructor(theName: string){
        this.name = theName;
    }
    move(distanceInMeters: number = 0){
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
class Snake extends Animal {
    constructor(name: String){
        super(name);
    }
    move(distanceInMeters = 5){
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}
class Horse extends Animal {
    constructor(name: String){
        super(name);//Error
    }
    move(distanceInMeters = 45){
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}
let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);

Snippet 3:
class Person {
    protected name: string;
    constructor(name: string) {
        this.name = name;
    }
}
class Employee extends Person {
    private department: string;
    constructor(name: string, department:string){
        super(name);
        this.department = department;
    }
    public getElevatorPitch(){
        return `Hello, my name is ${this.name} and I work in ${this.department}`;
    }
}
let howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());

Snippet 4:
/*abstract class Abcd {

    show() {
        console.log('xyz');
    }
    abstract display();
}
class Xyz extends Abcd {
   
     display(){
        console.log('abcd');
     }
}
let x = new Xyz();
x.display();
x.show();*/

























/*interface Abcd {
    name: string;
    display(length: number, breadth: number);
    show();
}
interface Xyz {
    rank: number;
}

class Square implements Abcd, Xyz {
    name: string;
    rank: number;
    display (length: number, breadth: number) {
        console.log(`abcd`)
    }
    show(){

    }
}*/







