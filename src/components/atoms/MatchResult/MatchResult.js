import React from 'react';
import styled from 'styled-components';

const ResultItem = styled.div`
  padding: 10px;
  margin: 5px 0;
  background: white;
  border-radius: 8px;
  border: 1px solid #4a90e2;
  color: #4a90e2;
  font-size: 16px;
  
  &:hover {
    background: #f0f7ff;
  }
`;

const MatchResult = ({ winner, matchNumber }) => {
  return (
    <ResultItem>
      Match {matchNumber}: {winner === 'draw' ? "It's a Draw!" : `Winner - ${winner}`}
    </ResultItem>
  );
};

export default MatchResult; 