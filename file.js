
const fs = require("fs");
///// fs ----> filesystem...


/// read file..
fs.readFile("./welcome.txt","utf-8",(err,data)=>{

    console.log(data);
})

/// fs ----> callback function...


// write file...
const quote = "face is index of the mind !!!!!!!!";

fs.writeFile("./awesome.txt", quote, (err)=>{
    console.log("completed writing!!!!!")
});

/// folder....

const quote2="nothing is impossible";
fs.writeFile("./backup/text1.html", quote2, err=>{

    console.log("complete writing!!!")
});

/// creat more than 10 files in folder...

// for(i=1;i<=10;i++){
//     const quote3="happyier always";
//     fs.writeFile(`./backup/text-${i}.html`, quote3, err=>{
    
//         console.log("complete writing!!!")
//     });

// };




//// using function + for loop.....

const quote3="happyier always";
function createfiles(noOffiles,quote){
    for(i=1;i<=noOffiles;i++){
       
        fs.writeFile(`./backup/text-${i}.html`, quote, err=>{
        
            console.log("complete writing!!!" )
        });
    
    };

}
const [, ,noOffiles]=process.argv;
createfiles(noOffiles,quote3);


//// append to add some extra msg to the file..

 const msg="\n life is beautiful with our parents...."

fs.appendFile("./awesome.txt",msg, err=>{

    console.log("adding!!!!");
});

//// deleting the file...

fs.unlink("./awesome.txt", err=>{
    console.log("Deleting!!!!")
});
