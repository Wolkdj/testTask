require('module-alias/register')

const Message = require("@model").Message

var number = ["first", "second", "third"];
var email = ["firstMail@google.com", "secondMail@google.com", "thirdMail@google.com"];
var messagesNumber = 40;
for(var i = 0; i < messagesNumber; i++){
    var mess = new Message({
        text: number[i%3]+" message",
        email:number[i%3]+'Mail@google.com',
        author:number[i%3]+'Author'
    }) 
    mess.save().then(()=>{
        console.log("first test complited")
    })
}

console.log("test")