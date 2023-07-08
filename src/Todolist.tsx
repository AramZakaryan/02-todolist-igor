import React from 'react';

type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type TodoListPropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId:number)=>void
    changeFilter: (filter:string)=>void
}

export function Todolist(props: TodoListPropsType) {
    return <div>
        <h3>{props.title}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            {props.tasks.map((task, ind) =>
                <li>
                    <input type="checkbox" checked={task.isDone}/>
                    <span>
                        {task.title}
                    </span>
                    <button onClick={()=>{
                        props.removeTask(task.id)}}>✖️</button>
                </li>)}
        </ul>
        <div>
            <button onClick={()=>{props.changeFilter("All")}}>All</button>
            <button onClick={()=>{props.changeFilter("Active")}}>Active</button>
            <button onClick={()=>{props.changeFilter("Completed")}}>Completed</button>
        </div>
    </div>
}
