import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';

function App() {

    let [tasks, setTasks] = useState(
        [
            {id: 1, title: "HTML&CSS", isDone: true},
            {id: 2, title: "JS", isDone: true},
            {id: 3, title: "ReactJS", isDone: false},
            {id: 4, title: "Rest API", isDone: false},
            {id: 5, title: "GraphQL", isDone: false}
        ])

    const removeTask = (id: number) => {
        setTasks(tasks.filter(task =>
            task.id !== id))
        // console.log(tasks)
    }

    let tasksToShow = tasks

    let [filter, setFilter] = useState("All")

    filter === "Completed" ?
        tasksToShow = tasks.filter((task) => !task.isDone) :
        filter === "Active" ?
            tasksToShow = tasks.filter((task) => task.isDone) :
            tasksToShow = tasks


    return (
        <div className="App">
            <Todolist title="What to learn"
                      tasks={tasksToShow}
                      removeTask={removeTask}
                      changeFilter={setFilter}
            />
        </div>
    );
}

export default App;
