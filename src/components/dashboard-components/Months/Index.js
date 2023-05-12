import React, { useState } from 'react';
import * as C from './styles';
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";


const Index = (props) => {

  function handleArrowLeftButton() {
    props.handleArrowLeftMonth();
  }

  function handleArrowRightButton() {
    props.handleArrowRighttMonth();
  }
 
  return (
    <div>
         <C.MonthContainer>
          <C.MonthArea>
            <C.ArrowIcon icon={faArrowLeft} onClick={handleArrowLeftButton} />
            <h2>{props.month}</h2>
            <C.ArrowIcon icon={faArrowRight} onClick={handleArrowRightButton} />
          </C.MonthArea>
         </C.MonthContainer>
    </div>
  )
}

export default Index