import React, { useState, useEffect } from 'react';
import { FaCalendarCheck } from 'react-icons/fa';


const Chore = ({ id, chores, points, priority, handleDelete, setData }) => {

  return (
    <div>
      <div className="Chore" name="Chore" value={chores}>
        {chores}
        <div className="points-display">
          <div className="points-display">Points: {points}</div>
          <div className="points-display">Priority: {priority}</div>
        </div>
        <button className="delete" value={id} onClick={()=>handleDelete(id)}>
          <FaCalendarCheck color="green" />
        </button>
      </div>
      </div> 
  )
};

export default Chore;