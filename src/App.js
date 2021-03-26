import React, {useState} from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css'

function App() {
  // Maintains the short terms state of the program.
  
  // Records current state and adds new Tasks to that state
  const [tasks, setTasks] = useState(['Take Dogs for a walk', 'Take trash out']);
  // Records current state of the input field and updates/records inputed value
  const [input, setInput] = useState('');

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

      <ul>
        {tasks.map(task => (
          <li>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
