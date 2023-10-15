import '../../styles/DisplayTotal.css';

const GrandTotal = ({
  itemAmounts,
  totalTax,
  totalTips,
  onCalculateGrandTotal,
}) => {
  let countedSubtotal = 0;
  itemAmounts.map((x) => (countedSubtotal = countedSubtotal + +x));

  let grandTotal =
    Math.round((countedSubtotal + +totalTax + +totalTips) * 100) / 100;

  onCalculateGrandTotal(grandTotal);

  return <div className="display-items">Grand total: ${grandTotal}</div>;
};

export default GrandTotal;
