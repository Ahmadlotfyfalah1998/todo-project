 let namee = prompt("please enter your name here")
 let gennder = prompt("please write your gender her using (male/female) only")
 gennder = gennder.toLowerCase()
let agee = prompt("enter your age please")
if (agee <= 0){
alert("your age must be more than 0, please enter your age agine")

}
var title
if (gennder =="male"){
title = "Mr"
}
else if (gennder =="female"){ 
title = "Ms"
}

else
{
    title = ""
} 

 let message=confirm("do you want to skip welcoming message")
if (message!=true){
alert("welcom " + title + " "+namee)
}
//         lab         //
  let userAnswers = [] 

  userAnswers [0]= prompt("are you a student")
  userAnswers [1]= prompt("do you live in amman")
  userAnswers [2]= prompt("do you have a labtop")


  for (let i = 0 ; i < userAnswers.length ; i++){
if (userAnswers [i] == ""){
    userAnswers [i]= "invalid"
}
  }


 console.log(userAnswers)



  


