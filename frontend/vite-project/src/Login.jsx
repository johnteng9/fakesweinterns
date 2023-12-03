import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './index.css'

const User = {
  email: '123',
  pw: '123'
}


export default function Login() {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [notAllow, setNotAllow] = useState(true);
   
    
    const onClickConfirmButton = () => {
      
      if(username === User.email && password === User.pw) {
        alert('Successfully Login.')
        navigate('/home')
      } else {
        alert("Incorrect.");
      }
    }
    const handleInputChange = () => {
    setNotAllow(!username || !password);
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
                    onChange={(e) => {
                      setUsername(e.target.value);
                      handleInputChange();
                    }}></input>
                  </p>
                  <p>
                    <label htmlFor="password">Passphrase (Case Sensitive): </label>
                    <input className="required" id="password" size="25" type="text" autoComplete='off' name="password" value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      handleInputChange();
                    }}></input>
                  </p>

                </fieldset>

              </form>
    
            <button onClick={onClickConfirmButton} disabled={notAllow} className="bottomButton">
              Login
            </button>
            </div>
          </div>
        </div>
      </div>
    );
}

