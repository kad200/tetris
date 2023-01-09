import "./Tetris.css";
import Board from "./Board";
import GameStats from "./GameStats";
import Previews from "./Previews";
import { useBoard } from "../hooks/useBoard";
import { useGameStats } from "../hooks/useGameStats";

const Tetris = ({ rows, columns, setGameOver }) => {
  const [gameStats, addLinesCleared] = useGameStats();
  const [board, setBoard] = useBoard({ rows, columns });

  const player = { tetrominoes: [] };

  return (
    <div className="Tetris">
      <Board board={board} />
      <GameStats gameStats={gameStats} />
      <Previews tetrominoes={player.tetrominoes} />
    </div>
  );
};

export default Tetris;
