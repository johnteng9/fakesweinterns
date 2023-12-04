import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './index.css'

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    console.log(username);
    console.log(password);
    try {
      const apiUrl = `http://localhost:3003/login?email=${username}&password=${password}`; // Replace with the actual login API endpoint
      console.log(`http://localhost:3003/login?email=${username}&password=${password}`);
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      console.log('querysuccess');
      if (response.ok) {
        navigate('/home');
        console.log('Login successful');
      } else {
        // Handle login error
        const errorData = await response.json();
        setError(`Error: ${response.status} - ${errorData.message}`);
      }
    } catch (error) {
      // Handle network errors
      setError(`An error occurred: ${error.message}`);
    }
  };


  return (
    <div className='fakebody'>
      <div className="page">
        <div className="contentWrap">
          <div>
          <h2 className="title">
            <strong>CalNet </strong> 
            Authentication Service
            </h2>
            <form method='post' id='loginForm'>
              <fieldset>
                <p>
                  <label htmlFor="username" id="username-label">CalNet ID: </label>
                  <input className="required" id="username" size="25" type="text" autoComplete='off' autoCapitalize='none' aria-labelledby='username-label' name="username" value={username}
                  onChange={(e) => setUsername(e.target.value)}></input>
                </p>
                <p>
                  <label htmlFor="password">Passphrase (Case Sensitive): </label>
                  <input className="required" id="password" size="25" type="text" autoComplete='off' name="password" value={password}
                  onChange={(e) => setPassword(e.target.value)}></input>
                </p>

              </fieldset>

            </form>
  
          <button onClick={handleLogin} className="bottomButton">
            Login
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LoginPage;
