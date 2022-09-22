import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PersonalChore from './PersonalChore';
import NothingHere from './NothingHere';

function PersonalList() {
  const [personalData, setPersonalData] = useState([]);
  const [chores, setChores] = useState('');
  const [points, setPoints] = useState(0);
  const [priority, setPriority] = useState(0);

  const getData = async () => {
   try {
    const search = await fetch('/individual')
    .then(res => res.json())
    .then((data) => {
      setPersonalData(data);
    })
   } 
   catch {
    setPersonalData([]);
   }
  }
  
  useEffect(() => {
    getData();
   }, []);


  const handleDelete = (id, e) => {
    fetch(`/individual/1`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: id,
      }),
    })
      .then((res) => {
        if (res){
          getData();
        }
      })
        .catch((err) => console.log(err));
  };


  if (personalData.length > 0){
  return (
    <div>
      <h1>Personal Chores List</h1>
      <Link to="/tasks">
        <button> Leaderboard </button>
      </Link>
      {
      personalData.map((task, i) => (
        <PersonalChore
          personalData={task} //{ chores: 'louis', points: 20, priority: 15 }
          id = {task.id}
          chores={task.chorename} //{ chores: 'louis' }
          points={task.points} //{  points: 20,  }
          priority={task.priority} // {} priority: 15 }
          key={i}
          handleDelete={handleDelete}
          setPersonalData={setPersonalData}
        />
      ))}
      
    </div>
      
  )}
  else {
     return (
       <div>
       <h1>Personal Chores List</h1>
       <NothingHere/>
       </div>
     )
  }
}

export default PersonalList;
