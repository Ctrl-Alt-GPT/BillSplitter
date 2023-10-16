<<<<<<< HEAD
'use client';
import React from 'react';
import '../../styles/IndividualTotal.css';
=======
import React from 'react';
>>>>>>> 89a1bfd5e427c78bb0ef87e66c7fd2b21ca6dd01

const IndividualTotal = ({ datas }) => {
  const individualTotals = {};

  datas.forEach((item) => {
    if (Array.isArray(item.party)) {
      item.party.forEach((partyMember) => {
        if (!individualTotals[partyMember]) {
          individualTotals[partyMember] = 0;
        }
        individualTotals[partyMember] += parseFloat(item.amount);
      });
    } else {
      // If the item is not split, consider it as one item for each member in the party
      const partyMembers = item.party.split(',').map((party) => party.trim());
      const partyMemberCount = partyMembers.length;
      const splitAmount = parseFloat(item.amount) / partyMemberCount;
      partyMembers.forEach((partyMember) => {
        if (!individualTotals[partyMember]) {
          individualTotals[partyMember] = 0;
        }
        individualTotals[partyMember] += splitAmount;
      });
    }
  });

  return (
<<<<<<< HEAD
      <div className="IndividualTotal">
=======
    <div className="individual-total">
>>>>>>> 89a1bfd5e427c78bb0ef87e66c7fd2b21ca6dd01
      <h2>Individual Totals</h2>
      <ul>
        {Object.entries(individualTotals).map(([partyMember, total]) => (
          <li key={partyMember}>
            {partyMember}: ${total.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

<<<<<<< HEAD
export default IndividualTotal;
=======
export default IndividualTotal;
>>>>>>> 89a1bfd5e427c78bb0ef87e66c7fd2b21ca6dd01
