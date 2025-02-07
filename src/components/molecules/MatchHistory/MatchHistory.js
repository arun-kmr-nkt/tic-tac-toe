import React from 'react';
import styled from 'styled-components';
import MatchResult from '../../atoms/MatchResult/MatchResult';
import ScoreCard from '../../atoms/ScoreCard/ScoreCard';

const HistoryWrapper = styled.div`
  display: flex;
  gap: 40px;
  flex: 2;

  @media (max-width: 1200px) {
    flex-direction: column;
    width: 100%;
    gap: 30px;
  }
`;

const HistoryContainer = styled.div`
  flex: 1;
  background: rgba(255, 255, 255, 0.8);
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(74, 144, 226, 0.1);
  height: fit-content;
  min-height: 520px;
  display: flex;
  flex-direction: column;

  @media (max-width: 1200px) {
    width: 100%;
    max-width: 400px;
    min-height: auto;
  }
`;

const HistoryTitle = styled.h2`
  color: #4a90e2;
  text-align: center;
  margin: 0 0 20px 0;
  font-size: 24px;
  font-weight: bold;
`;

const HistoryList = styled.div`
  flex: 1;
  overflow-y: auto;
  padding-right: 10px;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f0f7ff;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #4a90e2;
    border-radius: 4px;
  }
`;

const ScoreContainer = styled.div`
  flex: 1;
  background: rgba(255, 255, 255, 0.8);
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(74, 144, 226, 0.1);
  height: fit-content;
  min-height: 520px;

  @media (max-width: 1200px) {
    width: 100%;
    max-width: 400px;
    min-height: auto;
  }
`;

const MatchHistory = ({ matches, scores }) => {
  return (
    <HistoryWrapper>
      <ScoreContainer>
        <ScoreCard scores={scores} />
      </ScoreContainer>
      <HistoryContainer>
        <HistoryTitle>Match History</HistoryTitle>
        <HistoryList>
          {matches.map((match, index) => (
            <MatchResult
              key={index}
              winner={match}
              matchNumber={matches.length - index}
            />
          ))}
        </HistoryList>
      </HistoryContainer>
    </HistoryWrapper>
  );
};

export default MatchHistory; 