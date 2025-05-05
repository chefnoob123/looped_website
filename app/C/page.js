'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';


const initialBoard = [
  [0, 2, 0, 6, 0, 8, 0, 0, 0],
  [5, 8, 0, 0, 0, 9, 7, 0, 0],
  [0, 0, 0, 0, 4, 0, 0, 0, 0],
  [3, 7, 0, 0, 0, 0, 5, 0, 0],
  [6, 0, 0, 0, 0, 0, 0, 0, 4],
  [0, 0, 8, 0, 0, 0, 0, 1, 3],
  [0, 0, 0, 0, 2, 0, 0, 0, 0],
  [0, 0, 9, 8, 0, 0, 0, 3, 6],
  [0, 0, 0, 3, 0, 6, 0, 9, 0],
];

const solution = [
  [1, 2, 3, 6, 7, 8, 9, 4, 5],
  [5, 8, 4, 2, 1, 9, 7, 6, 3],
  [9, 6, 7, 5, 4, 3, 1, 2, 8],
  [3, 7, 2, 1, 9, 4, 5, 8, 6],
  [6, 9, 1, 7, 8, 5, 3, 0, 4],
  [4, 5, 8, 0, 6, 2, 0, 1, 3],
  [8, 3, 6, 4, 2, 1, 0, 5, 7],
  [2, 1, 9, 8, 5, 7, 4, 3, 6],
  [7, 4, 5, 3, 0, 6, 2, 9, 1],
];

export default function SudokuPage() {
  const [board, setBoard] = useState(initialBoard.map(row => [...row]));
  const router = useRouter();

  const handleChange = (r, c, value) => {
    if (!initialBoard[r][c] && /^[1-9]?$/.test(value)) {
      const newBoard = board.map(row => [...row]);
      newBoard[r][c] = value === '' ? 0 : parseInt(value);
      setBoard(newBoard);
    }
  };

  const isSolved = () => {
    return board.every((row, r) =>
      row.every((cell, c) => cell === solution[r][c])
    );
  };

  const checkSolution = () => {
    if (isSolved()) {
      alert('🧠 Sudoku Solved! You are distracted way too easily.');
      router.push('/');
    } else {
      alert('🛑 Not correct yet. Keep working, you will get there');
    }
  };

  return (
    <div className="sudoku-wrapper">
      <h1>🧩 Sudoku Challenge</h1>
      <div className="sudoku-grid">
        {board.map((row, r) =>
          row.map((cell, c) => (
            <input
              key={`${r}-${c}`}
              className={`cell ${initialBoard[r][c] ? 'prefilled' : ''}`}
              value={cell === 0 ? '' : cell}
              onChange={(e) => handleChange(r, c, e.target.value)}
              maxLength={1}
              disabled={initialBoard[r][c] !== 0}
            />
          ))
        )}
      </div>
      <button className="check-btn" onClick={checkSolution}>Check</button>
    </div>
  );
}
