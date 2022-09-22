import React, { useState, useEffect } from 'react';
import Chore from './Chore';

//add fetch call functions into deconstructed object
import {} from '../services/user';



const ChoreList = ({ data, handleSubmit}) => {
  if (data.length > 0){
    console.log(data, 'data inside chorelist')
  }
  // const sendingData = data.map((task, i) => {
  //   <Chore 
  //   //data={data}
  //   key = {i}
  //   />
  //   console.log('data', data);
  // })

  // const sendingData = [];
  // for (let i = 0 ; i < data.length; i++){
  //   sendingData.push(
  //     <Chore
  //     key = {i + `child of ${i}`}
  //     />
  //   )
  // }

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
      {/* {  console.log(data, 'data passed down')} */}
      {<Chore  />}
   </div>
  );
};

export default ChoreList;


      {/* {data.map((task, i) => (
        <Chore
          // data={task} //{ chores: 'louis', points: 20, priority: 15 }
          // id = {task.id}
          // chores={task.chorename} //{ chores: 'louis' }
          // points={task.points} //{  points: 20,  }
          // priority={task.priority} // {} priority: 15 }
          key={i}
          // handleDelete={handleDelete}
          // setData={setData}
        />
      ))} */}