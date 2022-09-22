import React, { useState, useEffect } from 'react';
import Chore from './Chore';


const ChoreList = ({ data, handleSubmit, handleDelete, setData }) => {
  return (
    <div className="ChoreList">
      <h2>Task List</h2>
      <div>
        <h2> Add new task..</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          id="itemInput"
          type="text"
          placeholder="Input New Item"
          minLength="3"
          required
        ></input>
        <input
          id="numInput"
          type="number"
          placeholder="Enter points"
          minLength="3"
          required
        ></input>
        <input
          id="numInput2"
          type="number"
          placeholder="Priority"
          minLength="3"
          required
        ></input>
        <button type="Submit">Add item</button>
      </form>
      {data.map((task, i) => (
        <Chore
          data={task}
          id = {task.id}
          chores={task.chorename} 
          points={task.points} 
          priority={task.priority} 
          key={i}
          handleDelete={handleDelete}
          setData={setData}
        />
      ))}
    </div>
  );
};

export default ChoreList;
