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

 let msg=confirm("do you want to skip welcoming message")
if (msg!=true){
alert("welcom " + title + " "+namee)




}