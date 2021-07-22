// function showTodo(todo:{task:string,text:string}){
//     return todo.task + ": " + todo.text;
// }
var tasks = { task: "Watch", text: "24 Hours" };
function showTodo(todo) {
    return todo.task + ": " + todo.text;
}
console.log(showTodo(tasks));
