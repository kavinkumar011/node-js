console.log("Maximum values")


//// find maximum num from arry....

console.log(process.argv)

// const nums=process.argv[2];
///or we can use this 

const [, , nums]= process.argv;

console.log(nums);
const arr = JSON.parse(nums);
console.log("converted string to array",arr);
console.log("select position",arr[3]);
console.log("maximum number",Math.max(...arr));




