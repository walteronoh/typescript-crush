// function showTodo(todo:{task:string,text:string}){
//     return todo.task + ": " + todo.text;
// }

let tasks = {task:"Watch",text:"24 Hours"};

// console.log(showTodo(tasks));

//Using interface
interface todo{
    task:string;
    text:string;
}

function showTodo(todo){
    return todo.task + ": " + todo.text;
}

console.log(showTodo(tasks));