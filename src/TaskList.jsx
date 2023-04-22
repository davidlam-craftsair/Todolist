import React from 'react';

export default function TaskList({ tasks, onTaskPropChanged, onTaskDeleted }) {
  return (
    <>
      <h1>Task List</h1>
      <ol>
        {tasks.map((t, index) => {
          return <li key={index}>
            <button onClick={() => onTaskDeleted(t.id)} style={{ width: "0.5em", height: "0.5em" }}></button>
            <label className="taskLabel">{t.taskName}</label>
            <input type='checkbox' checked={t.done} onChange={() => onTaskPropChanged(t)}></input>
          </li>
        })}
      </ol>
    </>
  )
}
