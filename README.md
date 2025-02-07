# React Tic Tac Toe

A modern implementation of the classic Tic Tac Toe game built with React.js using atomic design principles.

## Features

- Clean and modern UI
- Responsive design
- Game state management
- Winner detection
- Draw detection
- Reset game functionality

## Project Structure

The project follows atomic design principles:
- `atoms/`: Contains the smallest components (Square)
- `molecules/`: Contains combinations of atoms (Board)
- `organisms/`: Contains larger components with business logic (Game)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## How to Play

1. The game starts with Player X
2. Click on any empty square to make a move
3. Players alternate between X and O
4. The first player to get 3 in a row (horizontally, vertically, or diagonally) wins
5. If all squares are filled and no player has won, the game is a draw
6. Click the "Reset Game" button to start a new game

## Technologies Used

- React.js
- Styled Components
- Modern JavaScript (ES6+) 