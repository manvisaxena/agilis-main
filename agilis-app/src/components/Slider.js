import React from 'react'
import styled from 'styled-components';
const ImagePanel = styled.div`
  width: 50%;
  height: 70%;
  min-width: 700px;
  display: flex;
  justify-content: space-between;
  flex: 3;
  margin: 10px;
  padding: 30px;
  background-color: #9bac9b;
`;
const WhiteColorDiv = styled.div`
  color: white;
  margin: 10px 0px;
`

function Slider() {
  return (
    <ImagePanel>
      <WhiteColorDiv>
        <b>
          Images
        </b>
      </WhiteColorDiv>
    </ImagePanel>
  )
}

export default Slider;
