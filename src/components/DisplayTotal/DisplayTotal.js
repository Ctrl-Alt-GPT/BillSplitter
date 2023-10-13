import '../../styles/DisplayTotal.css';
import Card from '../UI/Card';
import GrandTotal from './GrandTotal';
import Subtotal from './Subtotal';

const DisplayTotal = (props) => {
  const extractedItemAmounts = props.datas.map((data) => data.amount);
  const receivedTaxTips = props.taxTipsData;
  
  return (
    <Card className="display-total">
      <Subtotal itemAmounts={extractedItemAmounts} />
      <p className="display-items">Total tax: ${receivedTaxTips.tax}</p>
      <p className="display-items">Total tips: ${receivedTaxTips.tips}</p>
      <GrandTotal
        itemAmounts={extractedItemAmounts}
        totalTax={receivedTaxTips.tax}
        totalTips={receivedTaxTips.tips}
      />
    </Card>
  );
};

export default DisplayTotal;
