import React from 'react';
import { Link } from 'react-router-dom';


const NothingHere = () => {
  return (
    <Link to="/tasks">
    <button> Nothing Here, Add More Tasks </button>
  </Link>
  )
}

export default NothingHere;