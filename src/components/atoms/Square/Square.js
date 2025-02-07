import React from 'react';
import styled from 'styled-components';

const StyledSquare = styled.button`
  width: 100px;
  height: 100px;
  background: white;
  border: 2px solid #4a90e2;
  border-radius: 8px;
  font-size: 48px;
  font-weight: bold;
  color: #4a90e2;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background: #f0f7ff;
  }
`;

const Square = ({ value, onClick }) => {
  return (
    <StyledSquare onClick={onClick}>
      {value}
    </StyledSquare>
  );
};

export default Square; 