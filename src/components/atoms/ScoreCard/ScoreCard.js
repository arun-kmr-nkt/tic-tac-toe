import React from 'react';
import styled from 'styled-components';

const ScoreContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ScoreTitle = styled.h3`
  color: #4a90e2;
  text-align: center;
  margin: 0 0 30px 0;
  font-size: 24px;
  font-weight: bold;
`;

const ScoreList = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

const ScoreItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #e0e0e0;
  
  &:last-child {
    border-bottom: none;
  }
`;

const PlayerName = styled.span`
  color: #4a90e2;
  font-weight: bold;
  font-size: 20px;
`;

const Score = styled.span`
  background: #f0f7ff;
  padding: 10px 20px;
  border-radius: 12px;
  color: #4a90e2;
  font-weight: bold;
  min-width: 30px;
  text-align: center;
  font-size: 20px;
`;

const ScoreCard = ({ scores }) => {
  return (
    <ScoreContainer>
      <ScoreTitle>Total Score</ScoreTitle>
      <ScoreList>
        <ScoreItem>
          <PlayerName>Player X</PlayerName>
          <Score>{scores.X}</Score>
        </ScoreItem>
        <ScoreItem>
          <PlayerName>Player O</PlayerName>
          <Score>{scores.O}</Score>
        </ScoreItem>
        <ScoreItem>
          <PlayerName>Draws</PlayerName>
          <Score>{scores.draw}</Score>
        </ScoreItem>
      </ScoreList>
    </ScoreContainer>
  );
};

export default ScoreCard; 