import React from 'react';

export default function TaskList({ tasks, onTaskPropChanged, onTaskDeleted }) {
  return (
    <>
      <h1>Task List</h1>
      <ol>
        {tasks.map((t, index) => {
          return <li key={index}>
            <label>{t.taskName}</label>
            <input type='checkbox' checked={t.done} onChange={() => onTaskPropChanged(t)}></input>
          </li>
        })}
      </ol>
    </>
  )
}
