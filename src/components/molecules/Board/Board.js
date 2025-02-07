import React from 'react';
import styled from 'styled-components';
import Square from '../../atoms/Square/Square';

const BoardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  width: 324px;
  padding: 16px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(74, 144, 226, 0.1);
`;

const Board = ({ squares, onClick }) => {
  return (
    <BoardContainer>
      {squares.map((square, index) => (
        <Square
          key={index}
          value={square}
          onClick={() => onClick(index)}
        />
      ))}
    </BoardContainer>
  );
};

export default Board; 