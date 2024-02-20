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

//Given an array of objects representing books, create a new array with only the books published in the last 5 years,
// then calculate the total number of pages for those books

const books = [
    {bookName:'Math'     ,publishDate:2000,pages:756},
    {bookName:'Physics'  ,publishDate:2018,pages:1756},
    {bookName:'Chemistry',publishDate:2020,pages:7356},
    {bookName:'Biology'  ,publishDate:2023,pages:7456},
    {bookName:'hindi'    ,publishDate:2021,pages:7156},
    {bookName:'EGD'      ,publishDate:2022,pages:7056}
];

const currentYear = new Date().getFullYear();

const output8 = books.filter((x)=>(currentYear - x.publishDate)<=5).reduce((acc,curr)=>{
     acc = acc+ curr.pages
    return acc;
},0);

console.log("--->",output8);


//Given an array of objects representing students, calculate the average age of all the students.


const student =[
    {age:23},
    {age:22},
    {age:12},
    {age:26}
];


const averageAge = student.reduce((acc,curr)=>{
    acc = acc + curr.age;
    return acc;
},0);

 let avg1 = averageAge/student.length;
 console.log("--->"+avg1);

 //Given an array of numbers, calculate the sum of all the even numbers.

 let numbers = [3,4,6,45,34,33,30,10];

 const even =numbers.filter((n)=>n%2==0);

 console.log("--->",even);

 let evenSum = even.reduce((acc,curr)=>(acc+curr),0);

 console.log("--->",evenSum);


 //Given an array of objects representing students, calculate the sum of the age of all the students who have an age greater than 20.


 let students = [
    {name:"AtifSohail"     ,age:19},
    {name:"AbhishekKumar"  ,age:17},
    {name:"MaqsoodAli"     ,age:22},
    {name:"Ankit"          ,age:20},
    {name:"rahul"          ,age:21},

 ];

 const agGreaterThan = students.filter((x)=>x.age>20).reduce((acc,curr)=>acc+curr.age,0)

 console.log(agGreaterThan);

 //Given a REST API endpoint that returns an array of blog post objects, use the reduce function
 // to calculate the total number of likes for all the blog posts.

 let blogPost = [
    {socialSites:"facebook" ,post:4550},
    {socialSites:"isntagram",post:4105},
    {socialSites:"twitter"  ,post:2550},
    {socialSites:"LikedIn"  ,post:1550},
    {socialSites:"SnapChat" ,post:2550},
    {socialSites:"whatApp"  ,post:3150},

 ];
const totalPost = blogPost.reduce((acc,curr)=>acc+curr.post,0);
console.log("-->",totalPost);

