import * as types from '../constants/actionTypes.js';
import React, { useState } from 'react';

// const [data, setData] = useState([]);
// const [chores, setChores] = useState('');
// const [points, setPoints] = useState(0);
// const [priority, setPriority] = useState(0);
// make state object with the above properties and initial values
const initialState = {
  data: [],
  // chores: '',
  // points: 0,
  // priority: 0
}
const choreReducer = (state = initialState, { type, payload }) => {
    let data;
  switch (type) {

    case types.GET_ALL_CHORES: {
      console.log(payload, 'payload in get all c');
      const newData = payload.filter( id => id.userid === null);
      data = state.data.slice();
      
      data.push(...newData);
      console.log(data, 'data inside get all chores')
      // console.log(data, 'this is newState');
      // console.log(state, 'state inside reducer')
      return {
        ...state,
        data
      }
    }
    //case for accept_chore
    case types.ACCEPT_CHORE: {
        console.log(payload, 'payload in accept chore')
        const choreId = payload;
        fetch(`/individual/${payload}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id: choreId }),
        })
        .then((res) => {
          data = state.data.slice();
          //  && state.userid !== id
          const newData = data.filter( state => state.userid === null);
          console.log(newData, 'newdata in acceptChore')
          data.push(...newData);
          return {
            ...state,
            data
          }
        })
          .catch((err) => console.log(err));

 
 
    }
    //case for create_chore
    case types.CREATE_CHORE: {
        //switch case should have the logic to keep previous chores and create new chore
        //in reducer use copy of state and modify it and return the modified copy
        //use slice and not setState, it will create a copy of it and return the rest of state and what you copied;
        //slice will only create a shallow copy, wouldnt be best practice
      // console.log(payload.chorename, 'chorename from payload')
      const newData = {
        ...payload,
        // chores: payload.chorename,
        // points: payload.points,
        // priority: payload.priority,
      }
      console.log(newData, 'newData in create chore')
      console.log(payload, 'payload object create chore')
      data = state.data.slice();
      data.push(newData);
      console.log(data, 'array in createChore')
      return {
        data,
        ...state,
      }
    }
    //case for complete_chore
    case types.COMPLETE_CHORE: {

    }
    default: {
      return state;
    }
  }
}

export default choreReducer; 