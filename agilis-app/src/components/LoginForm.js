import React, { useState } from 'react'
import styled from 'styled-components';

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

  const onLogin = (e) => {
    e.preventDefault()
    // When logged in
    console.log(userName, password);
  }
  const onLogout = () => {
    // when logged out
  }
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
  )
}

export default LoginForm
