import React from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const Navigate = useNavigate();
  //  useEffect(
  //    fetch('/signup')
  //      .then((data) => data.json())
  //      .then((response) => setData(response))
  //  );

  const submitRegister = (event) => {
    event.preventDefault();
    console.log(event);
    fetch('/user/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({
        userId: event.target[0].value,
        passwordId: event.target[1].value,
      }),
    })
    .then((res) => res.json())
    .then((data) => {
      if (data.message){
      window.confirm(data.message)
      }
      else {
        console.log(data.successMessage);
        Navigate('/tasks');
      }
    })
    
    .catch((err) => console.log(err));
  }

  return (
    <div className="register">
      <h3 id="register">Register</h3>
      <div className='cloud' id='cloud5'></div>
    <div className='cloud' id='cloud6'></div>
    <div className='cloud' id='cloud7'></div>
    <div className='cloud' id='cloud8'></div>


      <form onSubmit={submitRegister}>
        {/* <div>
          <label>Name</label>
          <input type="text" id="name" name="name" required />
        </div> */}
        <div>
          <label>Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div>
          <button type="submit" >Register</button>
        </div>
      </form>
    </div>
  );
}

export default Register;
