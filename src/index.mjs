import "./styles.css";

let date = new Date();
let day = date.getDay();
let dayList = ["sunday","monday","tuesday","wednesday","thrusday","friday","saturday"]
document.write(`Today is : ${dayList[day]}`);
let hours = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();
if(hours>=12)
{
document.write(`<br>Current time is : ${hours} PM : ${minute} : ${second}`);
}
else
{
  document.write(`<br>Current time is : ${hours} AM : ${minute} :  ${second}`);
}