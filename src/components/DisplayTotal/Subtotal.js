const Subtotal = ({ itemAmounts }) => {
  let countedSubtotal = 0;

  itemAmounts.map((x) => (countedSubtotal = countedSubtotal + +x));

  return <div>Subtotal: ${countedSubtotal}</div>;
};

export default Subtotal;
