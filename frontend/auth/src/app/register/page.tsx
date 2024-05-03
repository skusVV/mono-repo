'use client'
import { useState, useEffect } from "react";
import styled from 'styled-components';

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 75vh;

  .field {
    margin-top: 48px;
    width: 20%;

    input {
        width: 100%;
        padding: 8px;
    }
  }
`


export default function Register() {

  return (
    <StyledMain>
      <div>Register</div>
      <div className="field">
         <input type="text" placeholder="First name" />
      </div>
      <div className="field">
         <input type="text" placeholder="Last name" /> 
      </div>
      <div className="field">
        <input type="text" placeholder="Email name" />
      </div>
      

    </StyledMain>
  );
}
