var fullName = "linus torvalds";
var birthYear = 1969;

var myArray = [];

myArray.push(fullName);
myArray.push(birthYear);

// console.log(myArray);

var splitName = fullName.split(" ");

 // console.log(splitName);

function sayHello(){
  console.log('Hello,'+splitName[0]+'!');
}

//sayHello();

function calcAge(year){
  return year;
}
calcAge(2017);