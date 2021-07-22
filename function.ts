//Assigning types in function parameters and the return value
function getSum(numb1:number,numb2:number):number{
    return numb1 + numb2;
}
//console.log(getSum(1,6));

function getName(firstName:string,lastName:string):string{
   return "First Name: " + firstName + "\n" + "Last Name: " + lastName;
}
console.log(getName("John","Notts"));

//Returns void
function getVoid():void{
    return;
}