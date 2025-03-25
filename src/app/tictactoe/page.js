"use client";
import React, { useState } from "react";
import "./styles.css"; // Add CSS later

function App() {
  // 9 empty spaces for the game board
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true); // "X" starts first

  // Function to handle cell clicks
  const handleClick = (index) => {
    if (board[index] || checkWinner(board)) return; // Ignore if filled or game is over
    const newBoard = [...board];
    newBoard[index] = isXTurn ? "X" : "O";
    setBoard(newBoard);
    setIsXTurn(!isXTurn);
  };

  // Function to check for a winner
  const winner = checkWinner(board);

  // Function to reset the game
  const resetGame = () => {
    setBoard(Array(9).fill(null)); // Reset board
    setIsXTurn(true); // "X" starts again
  };

  return (
    <div className="game">
      <h1>Tic-Tac-Toe</h1>
      <div className="board">
        {board.map((cell, index) => (
          <button key={index} className="cell" onClick={() => handleClick(index)}>
            {cell}
          </button>
        ))}
      </div>
      <h2>{winner ? `Winner: ${winner} 🎉` : board.includes(null) ? `Next Turn: ${isXTurn ? "X" : "O"}` : "It's a Draw!"}</h2>
      <button className="reset" onClick={resetGame}>Reset Game</button>
    </div>
  );
}

// Function to check winning combinations
function checkWinner(board) {
  const winningPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
  ];

  for (let [a, b, c] of winningPatterns) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a]; // Returns "X" or "O"
    }
  }
  return null; // No winner yet
}

export default App;
