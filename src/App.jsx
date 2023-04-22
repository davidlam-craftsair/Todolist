import React from 'react';
import AddTask from './AddTask.jsx';
import TaskList from './TaskList.jsx';

var nextId = 0;

const tasksTemplate = [
  { id: nextId++, taskName: "Visit Prague Castle at 10am", done: false },
  { id: nextId++, taskName: "Go to Charles Bridge at 2pm", done: false },
  { id: nextId++, taskName: "Museum if have time", done: false }
];

function TaskApp() {
  const [tasks, setTasks] = React.useState(tasksTemplate);

  function handleAddTask(taskName) {
    console.log('Add task ' + taskName)
    setTasks([
      ...tasks,
      {
        id: nextId++,
        taskName: taskName,
        done: false
      }
    ])

  }

  function handleTaskPropChange(taskThatChanged) {
    // to reconstruct a list of task with updated
    setTasks(tasks.map((t) => {
      if (t.id == taskThatChanged.id) {
        taskThatChanged.done = !taskThatChanged.done;
        return taskThatChanged;
      }
      else {
        return t;
      }
    }));
  }

  function handleDeleteTask(taskId) {
    setTasks(tasks.filter((t) => t.id !== taskId))
  }

  return (
    <>
      <h1>Prague Itinerary</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList tasks={tasks}
        onTaskPropChanged={handleTaskPropChange}
        onTaskDeleted={handleDeleteTask}
      />
    </>
  )
}

export default TaskApp;
