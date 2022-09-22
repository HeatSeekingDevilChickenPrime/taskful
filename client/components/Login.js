import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const Navigate = useNavigate();
  //  useEffect(
  //    fetch('/login')
  //      .then((data) => data.json())
  //      .then((response) => setData(response))
  //  );

  const submitLogin = (event) => {
    event.preventDefault();
    fetch('/user/localLogin', {
      method: 'POST',
      headers: {'Content-Type' : 'application/json'},
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
        Navigate('/tasks');
      }
    })

    .catch((err) => console.log(err));
  }

  return (
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={submitLogin}>
        <div className="email">
          <label>Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="pass">
          <label>Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div>
          <input className="Loginbutton" type="submit" value="Login"></input>
        </div>
      </form>
    </div>
  );
}
export default Login;
