/*PurPose==>2.Write a program that takes day and month from the command line and prints true if
*day of month is between March 20 and June 20, false otherwise.
*Author==>Sushmitha
*Sign_in==>20-09-2022
*/

const prompt =require("prompt-sync")({ sigint: true});

let date = prompt("Enter day Of the Month : ");
let month = prompt("Enter month Of the Year : ");
let year = prompt("Enter Year : ");
console.log("Date : " + date + "/" + month + "/" + year);

date = parseInt(date);
month = parseInt(month);
year = parseInt(year);

if (month<3 || month>6) 
	console.log("False"); 
else if((date<20 && month==3) || (date>20 && month==6)) 
	console.log("False");
else
    console.log("True");