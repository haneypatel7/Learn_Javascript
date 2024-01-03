let fname=`my name is haney`;


let pen=
{
    name:'cello',
    price: 12,
};

//string template literals is special types of string in js
let number='haney is here ';
let des=`the name of pen is ${pen.name}`;
console.log(`the price of pen is ${pen.price}`);
console.log(des);

console.log("haney\nthere!");
console.log(number.length);


//the way to have embedded in string
//to create string by doing substitution of placeholder

//`string text ${expression} string text`