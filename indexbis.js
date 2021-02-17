const newTaskContent = document.getElementById('newTaskContent').value
console.log(newTaskContent);

let newTaskDeadline = document.getElementById('newTaskDeadline').value
console.log(newTaskDeadline);

const newTaskSubmit = document.getElementById('newTaskSubmit');
console.log(newTaskSubmit);


const try = 'heelo';

function newTask() {
   /* const div = document.createElement("div");
    div.classList.add('to-dos');
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    */
    const content = document.createElement("p")
    const textContent = document.createTextNode(try);
    content.appendChild(textContent);
    console.log('OK!')
    

}


newTask();
