let newTaskContent = document.getElementById('newTaskContent').value
console.log(newTaskContent);

let newTaskDeadline = document.getElementById('newTaskDeadline').value

const newTaskSubmit = document.getElementById('newTaskSubmit');


const allTask = []

class newTask{
    constructor(content, deadline)
    {
        this.content = content;
        this.deadline = deadline;
        this.Initiate();
    }

    Initiate()
    {
        const addNewTask = (
        <div className="to-dos">
            <input type="text" id="hello"/>
        <p className="alignleft text-left"> <input type="checkbox" /> {this.content}</p>
        <p className="alignright text-right"> {this.deadline} <button id="edit"><img src="img/pencil-square.svg" alt="Icon edit"/></button><button id="remove"><img src="img/file-minus-fill.svg" alt="Icon remove"/></button></p>
      </div>
      );
      allTask.push(addNewTask)
    const showAllTask = (<div>{allTask} </div>);
    }
}

class Todocontainer extends React.Component {
    constructor (props) {
        super(props)
    }
    render() {
        console.log(allTask);
        return <div> hello! </div>
    }
}


ReactDOM.render(<Todocontainer />, document.getElementById('todocontainer'));



 newTaskSubmit.onclick = () => {const tasks = new newTask(newTaskContent, newTaskDeadline)};
/*

function showList () {
    
    taskNumber.bind(newTask).map(taskNumber => ReactDOM.render(taskNumber, document.getElementById('todocontainer')));
}*/



