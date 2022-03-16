import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Cookies from 'js-cookie';

const Container = styled.div`
  height: 70%;
  width: 50%;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  padding: 30px;
  margin 10px;
  flex: 1;
  background-color: #9bac9b;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  flex: 1;
  border: 1px solid white
`;
const LogoutButton = styled.button`
  margin: 10px 0px;
`
const WhiteColorDiv = styled.div`
  color: white;
  margin: 10px 0px;
`

function LoginForm() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthorisedUser, setIsAuthorisedUser] = useState(false);

  const onLogin = (e) => {
    e.preventDefault()
    // When cookie is set you are already logged in
    if(isCookieSet()){
      alert('You are already logged in!');
    }else{
      authoriseUser()
      window.location.reload();
    }
    console.log(userName, password);
  }

  const isCookieSet = () => {
    if(Cookies.get('userName') && Cookies.get('password')){
      // To trigger useEffect
      setIsAuthorisedUser(true);
      return true;
    } else{
      setIsAuthorisedUser(false);
      return false;
    }
  }

  const authoriseUser = () => {
    if(userName && password){
      Cookies.set('userName', userName);
      Cookies.set('password', password);
      setIsAuthorisedUser(true);
    } else{
      setIsAuthorisedUser(false);
    }
  }

  const onLogout = () => {
    // when logged out
    unAuthoriseUser();
    window.location.reload();
  }

  const unAuthoriseUser = () => {
    Cookies.remove('userName');
    Cookies.remove('password');

    setIsAuthorisedUser(false);
  }

  useEffect(() => {}, [isAuthorisedUser])

  return (
    <Container>
      <WhiteColorDiv>
        <b>
          Login Page
        </b>
      </WhiteColorDiv>
      <Form onSubmit={e => onLogin(e)}>
        <WhiteColorDiv>{'UserName: '}
          <input type='text' id='userName' placeholder='User name' value={userName} onChange={(e) => setUserName(e.target.value)}></input>
        </WhiteColorDiv>
        <WhiteColorDiv>{'Password: '}
          <input type='password' id='userPass' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
        </WhiteColorDiv>
        <button type='submit' >Login</button>
      </Form>

      <LogoutButton onClick={() => onLogout()} >Logout</LogoutButton>

    </Container>
  );
}

export default LoginForm
