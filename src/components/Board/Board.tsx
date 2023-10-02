import Card from '../UI/Card';
import Items from '../Items/Items';
import './Board.css';

const Board = () => {
  return (
    <Card className="board">
      <h1>Bill Splitter</h1>
      <Items />
    </Card>
  );
};

export default Board;
