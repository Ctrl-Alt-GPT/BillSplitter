'use client';
import { useEffect, useState } from 'react';
import { Card, CardContent, Grid } from '@mui/material';
import Items from '../Items/Items';
import '../../styles/Board.css';
import NewItem from '../NewItem/NewItem';
import DisplayTotal from '../DisplayTotal/DisplayTotal';
import TaxTipsAddComponent from '../TaxTipsAdd/TaxTipsAdd';
import IndividualTotals from '../IndividualTotals/IndividualTotals';
import SplitParty from '../SplitParty/SplitParty';

const DEFAULT_ITEMS = [];

const Board = (props) => {
  const [items, setItems] = useState(DEFAULT_ITEMS);
  const [tax, setTax] = useState(0);
  const [tips, setTips] = useState(0);
  // const searchParams = useSearchParams();

  useEffect(() => {
    if (props !== undefined) {
      setItems(props.items);
      const taxes = props.taxes == undefined ? 0 : props.taxes;
      setTax(taxes);
      const tipVals = props.tipVals == undefined ? 0 : props.tipVals;
      setTips(tipVals);
    }
  }, [props]);

  // useEffect(() => {
  //   if (searchParams !== undefined) {
  //     const parsedData = JSON.parse(searchParams.get('search'));

  //     if (parsedData && parsedData.lineItems) {
  //       // const lineItems = parsedData.lineItems;
  //       // console.log(JSON.stringify(lineItems));
  //       setItems(parsedData.lineItems);
  //       const tax = parsedData.taxes == undefined ? 0 : parsedData.taxes;
  //       setTax(tax);
  //       const tips = parsedData.tipValues == undefined ? 0 : parsedData.tipValues;
  //       setTips(tips);
  //       // console.log(JSON.stringify(items));
  //     }
  //   }
  // }, [searchParams]);

  const [tallies, setTallies] = useState([]);

  const splitBill = (itemsVals, taxVals, tipsVals) => {
    var subtotal = 0;
    var memberMap = {};

    // Cost per person for items ordered.
    for (var i = 0; i < itemsVals.length; i++) {
      const memberString = itemsVals[i].party.toLowerCase();
      const memberArray = memberString.split(/\s*,\s*/);
      const price = Number(itemsVals[i].amount);
      const individualCost = price / memberArray.length;
      subtotal += price;

      for (const person of memberArray) {
        if (memberMap.hasOwnProperty(person)) {
          memberMap[person] += individualCost;
        } else {
          memberMap[person] = individualCost;
        }
      }
    }

    var memberMapArray = [];
    // Tax/tips share for each member.
    for (const person in memberMap) {
      if (memberMap.hasOwnProperty(person)) {
        const individualAmount = memberMap[person];
        const proportion = individualAmount / subtotal;
        const individualTax = taxVals * proportion;
        const individualTips = tipsVals * proportion;
        memberMap[person] += individualTax;
        memberMap[person] += individualTips;
      }
      memberMapArray.push({
        party: person,
        share: memberMap[person],
      });
    }
    setTallies(memberMapArray);
  };

  useEffect(() => {
    splitBill(items, tax, tips);
  }, [items, tax, tips]);

  const getTaxVal = (taxVal) => {
    setTax(taxVal);
  };

  const getTipsVal = (tipsVal) => {
    setTips(tipsVal);
  };

  const [removeIdx, setRemoveIdx] = useState(0);
  const getRemoveIdx = (removeThis) => {
    setRemoveIdx(removeThis);
  };

  useEffect(() => {
    removeItem(removeIdx);
  }, [removeIdx]);

  const removeItem = (removeMe) => {
    const filteredArray = items.filter((item) => item.id !== removeMe);
    setItems(filteredArray);
  };

  const [grandTotal, setGrandTotal] = useState(0);

  const calculatedGrandTotalHandler = (total) => {
    setGrandTotal(total);
  };

  const addItemHandler = (item) => {
    let parties = Array.isArray(item.party) ? item.party : [item.party];
    parties = parties.map((party) => party.trim());

    const partiesCount = parties.length;
    if (partiesCount > 1) {
      const totalAmount = parseFloat(item.amount);
      const splitAmount = (totalAmount / partiesCount).toFixed(2);

      parties.forEach((partyMember) => {
        const newItem = {
          ...item,
          party: partyMember,
          amount: splitAmount,
        };

        setItems((prevItems) => {
          return [newItem, ...prevItems];
        });
      });
    } else {
      setItems((prevItems) => {
        return [item, ...prevItems];
      });
    }
  };

  const addPartyHandler = (partyName) => {
    setParties((prevParties) => {
      return [...prevParties, partyName];
    });
  };

  // Group items by party name
  // const groupedItems = {};
  // items.forEach((item) => {
  //   const party = item.party;
  //   if (!groupedItems[party]) {
  //     groupedItems[party] = [];
  //   }
  //   groupedItems[party].push(item);
  // });

  return (
    <Card
      sx={{
        p: 2,
        maxWidth: 0.9,
        minHeight: '90vh',
        marginX: 'auto',
        backgroundColor: 'rgb(232, 237, 255)',
      }}
    >
      <Grid container spacing={1}>
        <Grid item md={12}>
          <NewItem onAddItems={addItemHandler} />
        </Grid>
        <Grid item md={10} sm={8} xs={12}>
          <Items datas={items} removeItem={getRemoveIdx} />
        </Grid>
        <Grid item md={2} sm={4} xs={12}>
          <TaxTipsAddComponent
            getTaxVal={getTaxVal}
            getTipsVal={getTipsVal}
            tax={tax}
            tips={tips}
          />
        </Grid>
        <Grid item md={4} sm={5} xs={12} order={{ xs: 2, sm: 4 }}>
          <SplitParty total={grandTotal} />
        </Grid>
        <Grid item md={8} sm={7} xs={12} order={{ xs: 1, sm: 5 }}>
          <DisplayTotal
            datas={items}
            taxData={tax}
            tipsData={tips}
            calculatedGrandTotal={calculatedGrandTotalHandler}
          />
        </Grid>
        <Grid item md={12} sm={12} xs={12} order={{ xs: 3, sm: 6 }}>
          <IndividualTotals
            items={items}
            tax={tax}
            tips={tips}
            tallies={tallies}
            clearTax={getTaxVal}
            clearTips={getTipsVal}
            clearItems={setItems}
          />
        </Grid>
      </Grid>
    </Card>
  );
};

export default Board;
