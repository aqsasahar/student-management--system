import inquirer from "inquirer"
import chalk from "chalk"
console.log(chalk.red("==================================================="))
console.log(chalk.blue.bold.italic("well come to STUDENT MANAGMENT SYSTEMM"))
console.log(chalk.red("==================================================="))

let docontinue = true; 
while(docontinue){  //while loop
let id=Math.floor(10000 +Math.random()*90000);
let myBalance=0
let student = await inquirer.prompt([
    {
       name: "name",
       tpes:"input",
       message:(chalk.green.bold(" Eter student full name")),
    } ,
    {
        name: "course",
        type:"list",
        message:(chalk.green.bold("Enter student course")),
        choices:["javascript","graphic desgine","paython"],
    },
]); //print
//we add condition . jitne courses hoge utninhi condition lge gin. (if . else if)
if(student.course === "javascript"){
    myBalance = 10000   // now we make a verriable which name is mybalance 
}else if(student.course === "graphic desgine"){
    myBalance = 15000
}else if (student.course === "paython"){
    myBalance = 20000
}else{
    console.log(chalk.red.bold("invalid course"))
}
let Balance = myBalance
console.log(Balance);
//now we amke student id and first we decliare veriable
let student_id = id;
console.log(chalk.yellow.bold(`student id number is ${student_id}`));
//now we add again task view and exit
let task= await inquirer.prompt([
    {
        name :"option",
        type:"list",
        message:"enter your task",
        choices:["view status","exit"],
    },
]);
if (task.option === "view status"){
    console.log(`student name is ${student.name}`);
    console.log(`your id is ${student_id}`);
    console.log(`your balance is ${Balance}`); 
}else {
    (task.option === "exit")
    console.log("THANKYOU! for using our service")
};
const startagain=await inquirer.prompt([
    {
     name:"confirm",
     type:"confirm",
     message:(chalk.red.bold("Do you want to continue")),
    default:false
    }]);

if (startagain.confirm){
    confirm
}
else{
    break
}
} // this braket is while loop which continue the code agai for new student.