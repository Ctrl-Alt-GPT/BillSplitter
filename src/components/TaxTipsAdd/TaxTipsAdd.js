'use client';
import '../../styles/TaxTipsAdd.css';

const TaxTipsAddComponent = (props) => {


  const inputValidation = (inputNumber) => {
    if (inputNumber < 0) {
      return false;
    }
    const x = inputNumber * 100;
    const y = Math.floor(x);
    return x - y > 0 ? false : true;
  }
  
  const handleTaxChange = (e) => {
    if (inputValidation(e.target.value)) {
      props.getTaxVal(e.target.value);
    }

  };

  const handleTipsChange = (e) => {
    if (inputValidation(e.target.value)) {
      props.getTipsVal(e.target.value);
    }
  };

  return (
    <form className='tax-tips-add'>
      <div className='new-item__control'>
        <label>Tax</label>
        <input 
          name='tax'
          type="number" 
          min="0.01" 
          step="0.01" 
          onChange={handleTaxChange}>
        </input><br></br>
        <label>Tip</label>
        <input 
          name='tips' 
          type="number" 
          min="0.01" 
          step="0.01" 
          onChange={handleTipsChange}>
        </input><br></br>
      </div>
    </form>
  );
}

export default TaxTipsAddComponent;