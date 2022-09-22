import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Leaderboard from './Leaderboard';
import ChoreList from './ChoreList';
import { connect } from 'react-redux';
import * as actions from '../actions/actions'
// import { useSelector, useDispatch} from 'react-redux';

 const mapStateToProps = state => ({
    data: state.chores.data
  })

  const mapDispatchToProps = (dispatch) => {
    return {
      createChore: (choreCreated) => {
        dispatch(actions.CreateChoreCreator(choreCreated))
      },
      getAllChores : (choresReceived) => {
        dispatch(actions.GetAllChoresCreator(choresReceived))
      }
    }
  }


  
function ChoreContainer({data, createChore, getAllChores }) {
  // const [data, setData] = useState([]);
  // const [chores, setChores] = useState('');
  // const [points, setPoints] = useState(0);
  // const [priority, setPriority] = useState(0);

  //* here is a stateful component, put mapToDispatch stuff
 
  // console.log(data);

  const getData = () => {
    fetch('/family/1')
    .then(res => res.json())
    .then((respdata) =>{
      getAllChores(respdata)
    // const filterData = respdata.filter(id => id.userid === null)
    // setData(filterData); // change this
    })
    .catch((err) => {
    })
  }

  useEffect(() => {
    
    console.log('is use effect firing')
   getData();
  }, []);

  const handleSubmit = (e) => {
    console.log('handle submit firing');
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
      .then((resp) =>{
        //returns an object
        createChore(resp)
    })
  // setData([resp, ...data])) <= this logic in reducer function
      .catch((err) => console.log(err));
    
    document.getElementById('itemInput').value = null;
    document.getElementById('numInput').value = null;
    document.getElementById('numInput2').value = null;
  };

  // const handleDelete = (id) => {
  //   const choreId = id;
  //   fetch('/individual/1', {
  //     method: 'PATCH',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ id: choreId }),
  //   })
  //   .then((res) => res.json())
  //   .then((resData) => {
  //     if (resData){
  //     getData();
  //   }})
  //     .catch((err) => console.log(err));
  // };
 
  return (
    <>
      <Leaderboard />
      <Link to="/personal">
        <button>User Profile</button>
      </Link>
      {data && handleSubmit && <ChoreList
        data={data}
        // setChores={setChores}
        handleSubmit={handleSubmit}
        // handleDelete={handleDelete}
        // setData={setData}    
      />
      }
    </>
  );

}
export default connect(mapStateToProps, mapDispatchToProps)(ChoreContainer); 