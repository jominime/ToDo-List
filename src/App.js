import React, {useState, useEffect} from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import Task from './Components/Task'
import {db} from './firebase'
import './App.css'

function App() {
  // Maintains the short terms state of the program.
  
  // Records current state and adds new Tasks to that state
  const [tasks, setTasks] = useState([]);
  // Records current state of the input field and updates/records inputed value
  const [input, setInput] = useState('');

  // When the app loads, listen to the database and fetch new tasks as they are added/removed

  useEffect(() => {
    // this code runs when the app runs
    db.collection('tasks').onSnapshot(snapshot => {
      setTasks(snapshot.docs.map(doc => doc.data().task))
    })
  }, []);




  // When a new event is triggered (key press in form), this changes the forms state to match
  const changeHandler = (e) => {
    setInput(e.target.value)
  }

  // This function will run when the button is clicked
  const addTask = (e) => {
    e.preventDefault();           // Will Stop Page Refresh
    setTasks([...tasks, input])   // Keeps previous state and appends new task
    setInput('')                  // Clears the input field
  }

  // This is what this file will return on to the website
  return (
    <div className="App">
      <h1>Welcome to the Tasks App</h1>
      <form>
      <FormControl className='form_container'>
        <InputLabel >Write a Task</InputLabel>
        <Input value={input} onChange={changeHandler} />
      </FormControl>
        <Button disabled={!input} type="submit" onClick={addTask} variant="contained" color="primary">Add a task</Button>
        {/* <button type="submit" onClick={addTask}>Add a task</button> */}
      </form>
      <div className="tasks_list">
        <ul>
          {tasks.map(task => (
            <Task text={tasks}/>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
