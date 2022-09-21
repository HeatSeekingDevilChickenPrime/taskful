import * as types from '../constants/actionTypes.js';
import React, { useState } from 'react';

// const [data, setData] = useState([]);
// const [chores, setChores] = useState('');
// const [points, setPoints] = useState(0);
// const [priority, setPriority] = useState(0);
// make state object with the above properties and initial values
const initialState = {
  data: [],
  chores: '',
  points: 0,
  priority: 0
}
const choreReducer = (state = initialState, { type, payload }) => {
    let data;
  switch (type) {

    case types.GET_ALL_CHORES: {
      const newData = payload.filter( id => id.user.id === null);
      const newState = state.data.slice();
      newState.push(...newData);
      return {
        newState
      }
    }
    //case for accept_chore
    case types.ACCEPT_CHORE: {
      return {
  
      }
    }
    //case for create_chore
    case types.CREATE_CHORE: {
        //switch case should have the logic to keep previous chores and create new chore
        //in reducer use copy of state and modify it and return the modified copy
        //use slice and not setState, it will create a copy of it and return the rest of state and what you copied;
        //slice will only create a shallow copy, wouldnt be best practice
    data = state.data.slice();
    data.push(payload);
      return {
        ...state,
        data,
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