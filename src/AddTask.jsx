import React from 'react';

export default function AddTask({ onAddTask }) {

  return (
    <>
      <form>
        <input type="text" id="itineraryInput"></input>
        <input type="submit" onClick={() => {
          onAddTask(document.getElementById("itineraryInput"))
        }} />
      </form>


    </>

  )
}
