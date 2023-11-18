import React, { useEffect, useState } from 'react'

const User = {
  email: 'test@example.com',
  pw: 'test2323@@@'
}


export default function Login() {
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');

    const [emailValid, setEmailValid] = useState(false);
    const [pwValid, setPwValid] = useState(false);
    const [notAllow, setNotAllow] = useState(true);

    useEffect(() => {
      if(emailValid && pwValid) {
        setNotAllow(false);
        return;
      }
      setNotAllow(true);
    }, [emailValid, pwValid]);

    const handleEmail = (e) => {
      setEmail(e.target.value);
      const regex =
        /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
      if (regex.test(e.target.value)) {
        setEmailValid(true);
      } else {
        setEmailValid(false);
      }
    };
    const handlePw = (e) => {
      setPw(e.target.value);
      const regex =
        /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
      if (regex.test(e.target.value)) {
        setPwValid(true);
      } else {
        setPwValid(false);
      }
    };
    const onClickConfirmButton = () => {
      if(email === User.email && pw === User.pw) {
        alert('로그인에 성공했습니다.')
      } else {
        alert("등록되지 않은 회원입니다.");
      }
    }

    return (
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
                  <input className="required" id="username" size="25" type="text" autoComplete='off' autoCapitalize='none' aria-labelledby='username-label' name="username" value></input>
                </p>
                <p>
                  <label htmlFor="password">Passphrase (Case Sensitive): </label>
                  <input className="required" id="password" size="25" type="text" autoComplete='off' name="password" value></input>
                </p>

              </fieldset>

            </form>
  
          <button onClick={onClickConfirmButton} disabled={notAllow} className="bottomButton">
            Login
          </button>
          </div>
        </div>
      </div>
    );
}