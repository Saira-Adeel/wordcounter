import inquirer from "inquirer"
const answers:{
    sentence:string
}= await inquirer.prompt([{
    name:"sentence",
    type:"string",
    message:"Enter your sentence to countnthe word"
}
])
const words=answers.sentence.trim().split(" ")
console.log(words)
console.log(`Your sentence word count is${words.length}`)