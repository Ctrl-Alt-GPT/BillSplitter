import '../../styles/DisplayTotal.css';

const GrandTotal = ({ itemAmounts, totalTax, totalTips }) => {
  let countedSubtotal = 0;
  itemAmounts.map((x) => (countedSubtotal = countedSubtotal + +x));

  let grandTotal = countedSubtotal + +totalTax + +totalTips;

  return <div className="display-items">Grand total: ${grandTotal}</div>;
};

export default GrandTotal;
