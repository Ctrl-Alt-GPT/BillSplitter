import Card from '../UI/Card';
import Items from '../Items/Items';
import './Board.css';
import NewItem from '../NewItem/NewItem';

const Board = () => {
  return (
    <Card className="board">
      <h1>Bill Splitter</h1>
      <NewItem />
      <Items />
    </Card>
  );
};

export default Board;
