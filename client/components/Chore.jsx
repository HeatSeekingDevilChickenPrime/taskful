import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

//add fetch call functions into deconstructed object
import {} from '../services/user';

const Chore = ({ chores, points, priority, handleDelete, setData }) => {
  const handlePersonal = (id) => {
    e.preventDefault();
    fetch(`/api`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ _id: id }),
    })
      .then((data) => data.json())
      .catch((err) => console.log(err));

    fetch(`/api`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ _id: id }),
    })
      .then((data) => data.json())
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="points-display">Points: {points}</div>
      <div className="points-display">Priority: {priority}</div>
      <h2 className="Chore">
        Chore: {chores}
        <button className="update" onClick={handlePersonal}>
          Update
        </button>
        <button className="delete" onClick={handleDelete}>
          <FaTimes color="red" />
        </button>
      </h2>
    </div>
  );
};

export default Chore;
