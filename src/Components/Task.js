import React from 'react'
import {List, ListItem, ListItemText} from '@material-ui/core';
import '../Styles/Task.css'

function Task(props) {

  return (
    <div>
      <List className="task_list">
        <ListItem button>
          <ListItemText primary={props.text} />
        </ListItem>
      </List>
    </div>
  )
}

export default Task
