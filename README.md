# Angular
learning Angular : Implementing basics such as Creating Angular components,data binding,Binding component methods to user events etc
/*BASIC TYPES
let isDone: boolean = false;
//console.log(isDone);
let binary: number = 101010;
//console.log(binary);
let color: string = "blue";
color = "red";
let fullName: string = `Anuradha Mohanty`;
let age: number = 37;
let sentence: string = `Hello my name is  ${fullName}.
 I will be ${age + 1} years old next month`;
 //console.log(sentence);
 let list: number[] = [1,2,3];
 //console.log(list);
 let list1: string[] = ['Anu', 'abc', 'soumya' ];
 //console.log(list1);
 let x:[string,number];
 x =["mark", 100];
 //console.log(x);
 console.log(x[0].substr(1));
 enum Animal {cat, dog, rabbit};
 let pet = Animal.dog;
 //console.log(pet);
 let pet1 = Animal.cat;
 //console.log(pet1);
let petName = Animal[0];
//console.log(petName);
/*
let notSure :any = 4;
notSure = "making a string instead";
notSure = false;
let list2:any[] = [1, true, "free"];
console.log(list2[1]);
function warnUser(): void {
    console.log("This is my warning message");

}
warnUser();
function error(message: string): never {
    throw new Error(message);
}

declare function create(o: object | null ):void;
create({prop: 0});
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
console.log(strLength);
*************************************************************/
/*
function f(){
    var a = 10;
    return function g (){
        var b = a+1;
        return b;
    }
   
}
g();
var g = f();
console.log(g);

function x(){
    var a = 1;
    a = 2;
    var b = g();
    a = 3;
    return b;
    function g(){
        return a;
    }
}
x();
console.log(x());

function f(shouldInitialize: boolean){
    if (shouldInitialize) {
        var x = 10;
    }
    return x;
}
f(true);
f(false);*/

/* Let’s take a minute to consider what that means. 
setTimeout will run a function after some number of milliseconds, 
but only after the for loop has stopped executing; By the time the 
for loop has stopped executing, the value of i is 10. So each time 
the given function gets called, it will print out 10!

WHY THIS HAPPENS???????????? TRICKY


}for(var i = 0; i < 10; i++){
    setTimeout(()=> console.log(i),100*i);
/*Array Destructuring*/
/*let input = [1,2];
let [first, second] = input;
console.log(first);
console.log(second);
[first, second] = [second, first]
console.log(first);
console.log(second);*/
/*let [first, ...rest] = [1,2,3];
console.log(first);
console.log(rest);

/*Object Destructuring*/
/*let o = {
    a:"foo",
    b:12,
    c:"bar"
};
let {a,b} = o;
console.log(o);


let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
let search = { ...defaults, food: "rich"   };
console.log(search);
*/
/*We loose methods while spreading instance of an object*/
/*class C {
    p = 12;
    m(){

    }
}
let c = new C();
let clone = { ...c};
clone.p;
clone.m();//Error*/

Study notes on Interfaces:
