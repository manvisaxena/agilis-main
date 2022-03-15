import './App.css';
import styled from 'styled-components';
import Slider from './components/Slider';
import LoginForm from './components/LoginForm';

const Header = styled.header`
  background-color: #9bac9b;
  color: white;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
`;
const Body= styled.div`
  padding: 20px;
  height: 90%;
  display: flex;
  flex-direction: row;
  flex-flow: row wrap;
`;
function App() {
  return (
    <div className="App">
      <Header>
        <b>
          Take Home Challenge
        </b>
      </Header>
      <Body>
        <Slider />
        <LoginForm />
      </Body>
    </div>
  );
}

export default App;
