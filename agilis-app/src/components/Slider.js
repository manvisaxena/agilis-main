import React from 'react'
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ImageLoginUrls, ImageLogoutUrls } from '../resources/ImageUrls';
import getAllImages from '../utilities/getAllImages';

const ImageContainer = styled.div`
  width: 50%;
  height: 70%;
  min-width: 700px;
  display: flex;
  flex-direction: column;
  flex: 3;
  margin: 10px;
  padding: 30px;
  background-color: #9bac9b;

`;
const ImagePanel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 90%;
`;
const Img= styled.img`
  min-width: 150px;
  min-height: 200px;
  height: 100%;
  position: relative;

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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [allImages, setAllImages] = useState(getAllImages());
  let timer1;

  // Clicking next button
  const nextImageClick = () => {
    if(!allImages){
      return;
    }
    clearTimeout(timer1);
    // increase Index when next clicked else Alert
    if(allImages.length > currentImageIndex+1){
      setCurrentImageIndex(currentImageIndex+1);
    } else {
      alert('No more images');
    }
  }

  // Clicking prev button
  const prevImageClick = () => {
    if(!allImages){
      return;
    }
    clearTimeout(timer1);
     // decrease Index when prev clicked else Alert
    if(0 <= currentImageIndex-1){
      setCurrentImageIndex(currentImageIndex-1);
    } else {
      alert('No more images');
    }
  }

  useEffect(()=>{
    timer1= setTimeout(() => nextImageClick(), 3000);
  }, [])
  useEffect(
    () => {
      if(allImages.length > currentImageIndex+1){
        timer1= setTimeout(() => nextImageClick(), 3000);
      } else {
        return () => {
          clearTimeout(timer1);
        };
      }
    },
    [currentImageIndex],
  );

  return (
    <ImageContainer>
      <WhiteColorDiv>
        <b>
          Images
        </b>
      </WhiteColorDiv>
      <ImagePanel>
        <Button onClick={prevImageClick} >{'<'}</Button>
        <Img src={allImages[currentImageIndex]} alt="current pic"></Img>
        <Button onClick={nextImageClick}>{'>'}</Button>
      </ImagePanel>
    </ImageContainer>
  )
}

export default Slider;
