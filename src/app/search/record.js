'use client';
import '../../styles/RecordTile.css';
import '../../styles/Item.css';
import Link from 'next/link';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

const prodURL = true;

const Record = (props) => {

  const [items, setLineItems] = useState({});

  useEffect(() => {
  
    const updatedLineItems = props.lineItems.map((item) => ({
      ...item,
      party: item.party.toString(),
    }));

    const data = {
      id: props._id,
      lineItems: updatedLineItems,
      tallies: props.tallies,
      taxes: JSON.stringify(props.tax),
      tipValues: JSON.stringify(props.tips),
      createdOn: props.createdAt
    };
    setLineItems(data);
  }, []);

  const deleteRecord = async () => {
    props.removeRecord(props._id);

    // Uncomment to make permanent changes to DB.
    // var URL = 'http://localhost:3333/sean/' + props._id;
    // if (prodURL)
      // URL = 'https://gpt-billsplitter.com:3333/sean/' + props._id;  
    
    // try {
    //   const response = await fetch( URL, {method: 'DELETE',});
    //   if (!response.ok) {
    //     throw new Error('Network response was not ok');
    //   }
    // } catch (error) {
    //   console.error('Error deleting record:', error);
    // }
  }

  return (
    <>
      <div className="tile" >
       <Card sx={{ width: '100%',
                   height: '100%',
                   overflow: 'auto',
                   backgroundColor: 'white',
                  }} elevation={10}>
          <CardContent>
            <CardActions>
              
            <Link
              // Dynamic route:
                href={'/edit/' + props._id}
              //   href={{
              //     pathname: '/edit',
              //     query: {
              //       search: JSON.stringify(items)
              //     }
              // }}
              >
              <Button size="medium">Edit</Button>
            </Link>
              
            </CardActions>
            <Typography variant="h6" gutterBottom>
              Receipt ID: {props._id} <br />
              ------------------------------------------------------
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
            <strong>Line Items:</strong>
             <ul>
               {props.lineItems.map((item, index) => (
                 <li key={index}>
                   <strong>Title:</strong> {item.title} <br />
                   <strong>Party:</strong> {item.party.join(', ')} <br />
                   <strong>Amount:</strong> {item.amount} <br />
                   <br />
                 </li>
               ))}
             </ul>
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            <strong>Tallies:</strong>
            <ul>
              {props.tallies.map((tally, index) => (
                <li key={index}>
                  <strong>Party:</strong> {tally.party.charAt(0).toUpperCase() + tally.party.slice(1)} <br />
                  <strong>Share:</strong> {tally.share.toFixed(2)} <br />
                  <br />
                </li>
              ))}
            </ul>
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            <strong>Tax:</strong> {JSON.stringify(props.tax)}
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            <strong>Tips:</strong> {JSON.stringify(props.tips)}
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            <strong>Created On:</strong> {new Date(props.createdAt).toLocaleString()}
          </Typography>

        </CardContent>
        <CardActions>
          <Button size="medium" onClick={deleteRecord}>Delete</Button>
        </CardActions>
      </Card>
    </div>
    </>
  );
}

export default Record;