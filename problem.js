  //Given an array of objects, write a function that returns a new array with only the names of each object.


  const arr =[{name:"Atif"},
              {name:"abhishek"},
              {name:"maqsood"},
              {name:"zaid"},
              {name:"Tejas"},
              
             ];
        

const output =arr?.map(function (x){
    return x?.name;
});


console.log("--->",output);

//Given an array of objects, write a function that returns a new array with only the objects whose “completed” property is true.

const test1 = [
    {name : 'AS01' , completed : true},
    {name : 'AS02' , completed : false},
    {name : 'AS03' , completed : true},
    {name : 'AS04' , completed : false},
    {name : 'AS05' , completed : true},
    {name : 'AS06' , completed : false},
];

// const output1 = test1?.filter((item) => item?.completed);
// console.log('---->' , output1);

const output1 = test1?.filter((x)=>x?.completed);
console.log("--->",output1);

//Given an array of objects, write a function that returns the total amount of money for all the objects.

const test = [
    {sal:15000},
    {sal:200000},
    {sal:500000},
    {sal:700000},
    {sal:20000}

];
const output2 = test.reduce((acc,curr)=>{
   acc = acc + curr.sal;
   return acc;
},0);
console.log("--->",output2);


//Given an array of strings, return a new array with the length of each string


const test2 =["Atif","Abhishek","Maqsood","Ankit","Rahul"];

const output3 = test2.map((str)=>str.length);
console.log(output3);

//Given an array of objects representing people, return a new array with the full names of each person.

const people = [
{firstName:"akshay", lastName:"Sani"},
{firstName:"Nitish", lastName:"Kumar"},
{firstName:"Lalu", lastName:"yadav"},
{firstName:"tejaswi", lastName:"yadav"}
];

const fullName = people.map((x)=>x.firstName+" "+x.lastName);

console.log(fullName);

// Given an array of strings, return a new array with the first letter of each string capitalized and the rest in lowercase

let array =["atif","abhishek","maqsood","ankit","rahul"];

const output4 = array
    .map((str) => str.charAt(0).toUpperCase() + str.slice(1))    // Capitalize first letter of each string
    .filter((str) => str.charAt(0) === str.charAt(0).toUpperCase());


console.log("--->",output4);

//Given an array of objects representing products, return a new array with the name and price of each product, formatted as a string

const product =[
     
            {item:"Mobile",price:15000},
            {item:"charger",price:560},
            {item:"Earphone",price:1200},
            {item:"MobileTemper",price:100},
            {item:"MobileCover",price:120}
                  
];

const output5 = product.map((x)=>x.item+" "+x.price);
console.log(output5);

//Given an array of numbers, return the average of all the numbers

let number =[2,3,4,5,64,45,23];

const output6 = number.reduce((sum,curr)=>{
    sum = sum + curr;
    return sum;
    
},0);

let avg = output6/number.length;
console.log(avg);

//Given an array of objects representing orders, return the total cost of all the orders, grouped by product

const order =[
     
    {item:"Mobile",price:15000},
    {item:"charger",price:560},
    {item:"Earphone",price:1200},
    {item:"MobileTemper",price:100},
    {item:"MobileCover",price:120}
          
];

const output7 = order.reduce((acc,curr)=>{
    acc = acc + curr.price;
    return acc;
},0);

console.log(output7);

