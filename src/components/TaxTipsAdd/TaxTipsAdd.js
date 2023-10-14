'use client';
import '../../styles/TaxTipsAdd.css';
import { useState } from 'react';

export default function TaxTipsAddComponent({ sendToParent }) {
  const [taxAndTips, setTaxAndTips] = useState({
    tax: 0,
    tips: 0,
  });

  const handleChange = (e) => {
    setTaxAndTips({ ...taxAndTips, [e.target.name]: e.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    sendToParent(taxAndTips);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="tax-tips-add">
        <div className="new-item__control">
          <label>Tax</label>
          <input
            name="tax"
            type="number"
            min="0.01"
            step="0.01"
            onChange={handleChange}
          ></input>
          <br></br>
          <label>Tip</label>
          <input
            name="tips"
            type="number"
            min="0.01"
            step="0.01"
            onChange={handleChange}
          ></input>
          <br></br>
          <button className="blue-button" type="submit">
            submit
          </button>
        </div>
      </div>
    </form>
  );
}
