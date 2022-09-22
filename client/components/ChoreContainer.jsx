import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Leaderboard from './Leaderboard';
import ChoreList from './ChoreList';

function ChoreContainer() {
  const [data, setData] = useState([]);
  const [chores, setChores] = useState('');
  const [points, setPoints] = useState(0);
  const [priority, setPriority] = useState(0);

  const getData = () => {
    fetch('/family/1')
    .then(res => res.json())
    .then((respdata) =>{
    const filterData = respdata.filter(id => id.userid === null)
    setData(filterData);
    })
    .catch((err) => {
    })
  }
  
  useEffect(() => {
   getData();
  }, []);

  const handleSubmit = (e) => {
    let newChore = e.target[0].value;
    let newPoints = e.target[1].value;
    let newPriority = e.target[2].value;

    e.preventDefault();
    fetch('/family/1', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chore: newChore,
        points: newPoints,
        priority: newPriority,
      }),
    })
      .then((resdata) => resdata.json())
      .then( (resp) => setData([resp, ...data]))
      .catch((err) => console.log(err));
    
    document.getElementById('itemInput').value = null;
    document.getElementById('numInput').value = null;
    document.getElementById('numInput2').value = null;
  };

  const handleDelete = (id) => {
    const choreId = id;
    
    fetch('/individual/1', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: choreId }),
    })
    .then((res) => res.json())
    .then((resData) => {
      if (resData){
      getData();
    }})
      .catch((err) => console.log(err));
  };
 
  if (data) {
  return (
    <>
      <Leaderboard />
      <Link to="/personal">
        <button>User Profile</button>
      </Link>
      <ChoreList
        data={data}
        setChores={setChores}
        handleSubmit={handleSubmit}
        handleDelete={handleDelete}
        setData={setData}
        
      />
    </>
  );
}
}
export default ChoreContainer;