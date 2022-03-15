import React from 'react'
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
const WhiteColorDiv = styled.div`
  color: white;
  margin: 10px 0px;
`

function LoginForm() {
  return (
    <Container>
      <WhiteColorDiv>
        <b>
          Login Page
        </b>
      </WhiteColorDiv>

    </Container>
  )
}

export default LoginForm
