interface UserInterface{
    name:string;
    email:string;
    age:number;
    callName();
    payInvoice();
}

class User implements UserInterface{
    //Properties
    name:string;
    email:string;
    age:number;

    constructor(names:string,emails:string,ages:number){
        this.name = names;
        this.email = emails;
        this.age = ages;

        console.log("Name: "+this.name+"\n"+"Email: "+this.email+"\n"+"Age: "+this.age);
    }

    callName(){
        console.log(this.name + " is the required name.");
    }

    payInvoice(){
        console.log(this.name + " paid");
    }
}

// let users = new User("Jean Kowolski","kowolski@g.c",34);

// //Get the users age while outside the class
// console.log("Age: "+users.age);

// //Calling a method
// users.callName();


//Inheritance
//Create class Member that extends the User
class Member extends User{
    id:number;
    
    constructor(id:number,names:string,emails:string,ages:number){
        super(names,emails,ages);
        this.id = id;
    }

    payInvoice(){
        super.payInvoice();
    }
}

let mike:User = new Member(3,"Mike Dean","Dean@g.k",30);
mike.payInvoice();