import React, { useState, useEffect } from 'react';
import { FaCalendarCheck } from 'react-icons/fa';
import { connect } from 'react-redux';
import * as actions from '../actions/actions'

//add fetch call functions into deconstructed object
import {} from '../services/user';

const mapStateToProps = state => ({
  data: state.chores.data,
  // chores: state.chores.chores,
  // points: state.chores.points,
  // priority: state.chores.priority
})

const mapDispatchToProps = (dispatch) => {
  return {
    acceptChore : (choreAccepted) => {
      dispatch(actions.AcceptChoreCreator(choreAccepted))
    },
    getAllChores : (choresReceived) => {
      dispatch(actions.GetAllChoresCreator(choresReceived))
    }
  }
}


const Chore = ({data, acceptChore, getData }) => {

  const acceptChoreWrapper = (id) => {
    const choreId = id
    fetch('/individual/1', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: choreId }),
    })
    // getData();
  }
  //acceptChore(ele.id)

  // somehwere here
  // console.log(data, ' data in chores');
  // console.log(chores, 'chorename');
  // console.log(points, 'points');
  // console.log(priority, 'priority');
  // have onclick have a wrapper function that handles the fetch and just send id in payload
  return (
    data.map((ele, i) => {
      return (
        <div key = {i + `chore of ${i}`}>
        <h2 className="Chore" name="Chore" value={ele.chores}>
          {ele.chorename}
          <div className="points-display">
            <div className="points-display">Points: {ele.points}</div>
            <div className="points-display">Priority: {ele.priority}</div>
          </div>
          <button className="delete"  onClick={()=> acceptChoreWrapper(ele.id)}>
            <FaCalendarCheck color="green" />
          </button>
        </h2>
        </div> 
      )
    })
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(Chore);



// const handlePersonal = (id) => {
  //   e.preventDefault();
  //   fetch(`/api`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ _id: id }),
  //   })
  //     .then((data) => data.json())
  //     .catch((err) => console.log(err));

  //   fetch(`/api`, {
  //     method: 'DELETE',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ _id: id }),
  //   })
  //     .then((data) => data.json())
  //     .catch((err) => console.log(err));
  // };