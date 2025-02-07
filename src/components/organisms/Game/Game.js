import React, { useState } from 'react';
import styled from 'styled-components';
import Board from '../../molecules/Board/Board';
import MatchHistory from '../../molecules/MatchHistory/MatchHistory';

const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 40px;
  box-sizing: border-box;
  background-color: #f0f7ff;
`;

const GameContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  max-width: 1400px;
  gap: 40px;
  padding: 20px;

  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
`;

const GameBoard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  background: rgba(255, 255, 255, 0.8);
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(74, 144, 226, 0.1);
  min-height: 520px;
  justify-content: center;

  @media (max-width: 1200px) {
    width: 100%;
    max-width: 400px;
    min-height: auto;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
`;

const GameInfo = styled.div`
  margin: 0 0 20px 0;
  font-size: 24px;
  color: #4a90e2;
  font-weight: bold;
  text-align: center;
`;

const ResetButton = styled.button`
  padding: 12px 24px;
  font-size: 18px;
  background: #4a90e2;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #357abd;
  }
`;

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

const Game = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [matchHistory, setMatchHistory] = useState([]);
  const [scores, setScores] = useState({
    X: 0,
    O: 0,
    draw: 0
  });

  const winner = calculateWinner(squares);
  const status = winner
    ? `Winner: ${winner}`
    : squares.every(square => square)
    ? "It's a draw!"
    : `Next player: ${xIsNext ? 'X' : 'O'}`;

  const handleClick = (i) => {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const newSquares = squares.slice();
    newSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(newSquares);
    setXIsNext(!xIsNext);

    // Check if game is finished after this move
    const newWinner = calculateWinner(newSquares);
    const isDraw = newSquares.every(square => square);
    
    if (newWinner || isDraw) {
      // Update match history
      setMatchHistory(prev => [
        newWinner || 'draw',
        ...prev
      ]);
      
      // Update scores
      if (newWinner) {
        setScores(prev => ({
          ...prev,
          [newWinner]: prev[newWinner] + 1
        }));
      } else if (isDraw) {
        setScores(prev => ({
          ...prev,
          draw: prev.draw + 1
        }));
      }
    }
  };

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  const resetAll = () => {
    resetGame();
    setMatchHistory([]);
    setScores({
      X: 0,
      O: 0,
      draw: 0
    });
  };

  return (
    <GameContainer>
      <GameContent>
        <GameBoard>
          <GameInfo>{status}</GameInfo>
          <Board squares={squares} onClick={handleClick} />
          <ButtonContainer>
            <ResetButton onClick={resetGame}>Reset Game</ResetButton>
            <ResetButton onClick={resetAll} style={{ background: '#e74c3c' }}>
              Reset All
            </ResetButton>
          </ButtonContainer>
        </GameBoard>
        <MatchHistory matches={matchHistory} scores={scores} />
      </GameContent>
    </GameContainer>
  );
};

export default Game; 