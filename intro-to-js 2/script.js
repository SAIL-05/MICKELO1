// let storedPassword = 12345;
// let typedPassword = 12345;

// if(storedPassword === typedPassword){
//     alert("Log in successful");
// }else{
//     alert("Password is incorrect");
// }

// let  Average = 90;
// let studentScore = 95;

// if(studentScore > Average){
//     console.log(`${studentScore} is greater than ${Average}, so you pass.`);
// }else{
//     console.log(`${studentScore} is less than ${Average}, so you fail.`);
// }

// let storeAge = prompt("What your age");
// // console.log(storeEmail );
// let inputAge = prompt("Enter your age");
// // console.log(inputEmail );

// if(storeAge == inputAge){
//     alert(`${inputAge} is the same  number with ${storeAge}`);
// }else{
//     alert(`${inputAge} is not the same number with ${storeAge}`);
// }

// let storeAge = parseInt(prompt("What your age"));
// // console.log(storeEmail );
// let inputAge = parseInt(prompt("Enter your age"));
// // console.log(inputEmail );

// if(storeAge == inputAge){
//     alert(`${inputAge} is the same  number with ${storeAge}`);
// }else{
//     alert(`${inputAge} is not the same number with ${storeAge}`);
// }

// const UserNumber = parseInt(prompt("Enter a number"));

// if(UserNumber > 0){
//     alert(`${UserNumber} is a positive number`)
// }

// const a = parseInt(prompt("Enter a number"));
// const b = parseInt(prompt("Enter a number"));
// if( a > b){
//     alert(`${a} is greater than ${b} `);
// }else {
//     alert(`${b} is greater than ${a} `); 
// }

// const grade = parseInt(prompt("Enter your score"));

// if(grade <= 39){
//     alert(`${grade} is F`);
// }
// else if(grade <= 45){
//     alert(`${grade} is E`);
// }
// else if(grade <= 55){
//     alert(`${grade} is D`);
// }
// else if(grade >55 && grade <=65){
//     alert(`${grade} is c`);
// }

const weight = parseFloat(prompt("Enter your weight"));
const height = parseFloat(prompt("Enter your height"));
const BMI = weight / (height * height)

if(BMI < 18.5){
    alert(`BMI is ${BMI.toFixed(2)}, you are underweight.`);
}
else if(BMI >=18.5 && BMI <= 24.9){
    alert(`BMI is ${BMI.toFixed(2)}, you are healthy.`);
}
else if(BMI >=24.9 && BMI <= 29.9){
    alert(`BMI is ${BMI.toFixed(2)}, you are overweight.`);
}
else if(BMI >= 30){
    alert(`BMI is ${BMI.toFixed(2)}, you are Obese.`)
}else{
    alert("Invalid")
}
