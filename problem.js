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