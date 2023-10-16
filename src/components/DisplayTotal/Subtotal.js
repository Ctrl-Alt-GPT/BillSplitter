import '../../styles/DisplayTotal.css';

const Subtotal = ({ itemAmounts }) => {
  let countedSubtotal = 0;

  itemAmounts.map((x) => (countedSubtotal = countedSubtotal + +x));

  countedSubtotal = Math.round(countedSubtotal * 100) / 100;

  return <div className="display-items">Subtotal: ${countedSubtotal}</div>;
};

export default Subtotal;
