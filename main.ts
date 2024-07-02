#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

const quiz:{
     question_1: string;
     question_2: string;
     question_3: string;
     question_4: string;
     question_5: string;
     question_6:string
     question_7: string;
     question_8: string;
     question_9: string;
     question_10: string;
} = await inquirer.prompt([
     {
          name: "question_1",
          type: "list",
          message: "Q1.What is the primary difference between let and const.",
          choices: ["let allows reassignment,while const doest not.", "let has block scope,while const fonction scope.",
              "const allow redeclaration,while let doesnot."]
      },
      
      {
          name: "question_2",
          type: "list",
          message: "Q2.In JSON,which symbol is used to reprent an object. ",
          choices: ["[]", "{}","()","<>"]
      },
      {
          name: "question_3",
          type: "list",
          message: "Q3.let num = 3; num = 5;  what is the process in 2nd line called.",
          choices: ["re-declaration.", "re-assigning","re-initializing"]
      },
      {
          name: "question_4",
          type: "list",
          message: "Q4.An array contain...?",
          choices: ["number", "string","boolean","All of these"]
      },
      {
          name: "question_5",
          type: "list",
          message: "Q5.Which method is used to find the indexof the occurence of a value is an array .",
          choices: ["search()", "findindex()", "indexOf()","located()"]
      },
      {
          name: "question_6",
          type: "list",
          message: "Q6.What is the result of 'myArray.push(3)' if 'myArray' is an array with one element '2 in typescript?'.",
          choices: ["[2,3]", "[3,2]", "[2,1,2]","[1,2,1]"]
      },
      {
          name: "question_7",
          type: "list",
          message: "Q7.console.log('5'+ 5 + true)", 
          choices: ["11","10true", "55true"]
      },
      {
          name: "question_8",
          type: "list",
          message: "Q8.What will be the result of the following expression. null == undefined .",
          choices: ["true", "false","NaN",]
      },
      {
          name: "question_9",
          type: "list",
          message: "Q9. while (count < 100)  count++  ; console.log(count); the answer will run from",
          choices: ["0 to 100", "1 to 100","0 to 99",]
      },
      {
          name: "question_10",
          type: "list",
          message: "Q10.What is the correct way to check if two values are not equal in Typescript?",
          choices: ["a == b", "a === b","a = b", "a !==b"]
      }

])

let score:number = 0;

 switch (quiz.question_1) {
     case "let allows reassignment,while const doest not.":
          console.log("1.Correct! ✔");
          ++score;
          break;
          default:
          console.log("1.Incorrect!❌");
     
}
switch (quiz.question_2) {
     case "{}":
          console.log("1.Correct! ✔");
          ++score;
          break;
          default:
          console.log("1.Incorrect!❌");
     
}
switch (quiz.question_3) {
     case "re-assigning":
          console.log("1.Correct! ✔");
          ++score;
          break;
          default:
          console.log("1.Incorrect!❌");
     
}
switch (quiz.question_4) {
     case "All of these":
          console.log("1.Correct! ✔");
          ++score;
          break;
          default:
          console.log("1.Incorrect!❌");
     
}
  switch (quiz.question_5) {
     case "indexOf()":
          console.log("1.Correct! ✔");
          ++score;
          break;
          default:
          console.log("1.Incorrect!❌");
     
}
switch (quiz.question_6) {
     case "[2,3]":
          console.log("1.Correct! ✔");
          ++score;
          break;
          default:
          console.log("1.Incorrect!❌");
     
}
switch (quiz.question_7) {
     case "55true":
          console.log("1.Correct! ✔");
          ++score;
          break;
          default:
          console.log("1.Incorrect!❌");
     
}
switch (quiz.question_8) {
     case "true":
          console.log("1.Correct! ✔");
          ++score;
          break;
          default:
          console.log("1.Incorrect!❌");
     
}
switch (quiz.question_9) {
     case "0 to 99":
          console.log("1.Correct! ✔");
          ++score;
          break;
          default:
          console.log("1.Incorrect!❌");
     
}
switch (quiz.question_10) {
     case  "a !==b":
          console.log("1.Correct! ✔");
          ++score;
          break;
          default:
          console.log("1.Incorrect!❌");
     
}
console.log(`Score:${score}`);



