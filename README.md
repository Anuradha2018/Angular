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




