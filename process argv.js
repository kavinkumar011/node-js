
console.log("hello kavinkumar welcome to nodejs");

/// normal function...

// function sum(a,b){
//  return (a+b);
// }
// console.log(sum(10,20));

/// arrow function....

const sum = (a,b)=>{
    return a+b;
}
console.log(sum(20,50));


console.log(process.argv);

// const num1=process.argv[2]
// const num2=process.argv[3]
// console.log(sum(+num1,+num2));

const [, , num1,num2]=process.argv;
console.log(sum(+num1,+num2));

console.log(global);