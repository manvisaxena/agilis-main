import React from 'react'
import styled from 'styled-components';
const ImageContainer = styled.div`
  width: 50%;
  height: 70%;
  min-width: 700px;
  display: flex;
  flex-direction: column;
  flex: 3;
  margin: 10px;
  padding: 30px;

`;
const ImagePanel = styled.div`
  // width: 50%;
  // height: 70%;
  // min-width: 700px;
  display: flex;
  justify-content: space-between;
  // flex: 3;
  margin: 5px;
  // padding: 30px;
  background-color: #9bac9b;
`;
const Img= styled.img`
  min-width: 150px;
  min-height: 200px;
`;
const Button= styled.button`
  background-color: #9bac9b;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  height: 50px;
`
const WhiteColorDiv = styled.div`
  color: white;
  margin: 10px 0px;
`

function Slider() {
  const imgUrl= 'https://images.unsplash.com/photo-1646734329499-0afb2db25fb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80';
  const nextImageClick = () => {
    // Clicking next button
  }
  const prevImageClick = () => {
    // Clicking prev button
  }
  return (
    <ImageContainer>
      <WhiteColorDiv>
        <b>
          Images
        </b>
      </WhiteColorDiv>
      <ImagePanel>
        <Button onClick={prevImageClick} >{'<'}</Button>
        <Img src={imgUrl} alt="current pic"></Img>
        <Button onClick={nextImageClick}>{'>'}</Button>
      </ImagePanel>
    </ImageContainer>
  )
}

export default Slider;
