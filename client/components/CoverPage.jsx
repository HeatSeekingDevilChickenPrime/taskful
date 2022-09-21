import React from 'react';
import taskful from '../data/taskful.png';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth'
import Register from './Register';
import Login from './Login';
// console.log(taskful);

function CoverPage() {

  //check if there is a cookie that contains userId
    //true: get user data from database using userId
    //false: display the google login button

  return (
    <div className="CoverPage">
      <img src={taskful} />
      {/* <Link to="/tasks"> */}
        <div className="register"><Register /></div>
        <div className="login"><Login /></div>
        <div className="getStarted"><GoogleAuth /></div>
      {/* </Link> */}
    </div>
  );
}
export default CoverPage;
