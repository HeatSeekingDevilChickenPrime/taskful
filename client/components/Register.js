import React from 'react';

function Register() {
  //  useEffect(
  //    fetch('/signup')
  //      .then((data) => data.json())
  //      .then((response) => setData(response))
  //  );

  const submitRegister = (event) => {
    event.preventDefault();
    console.log(event);
    fetch('/user/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({
        userId: event.target[0].value,
      }),
    })
  }

  return (
    <div>
      <h3>Register</h3>

      <form onSubmit={submitRegister}>
        <div>
          <label>Name</label>
          <input type="text" id="name" name="name" required />
        </div>
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
