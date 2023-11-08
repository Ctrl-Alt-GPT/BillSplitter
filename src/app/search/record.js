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

const prodURL = true;

const Record = (props) => {

  const [items, setLineItems] = useState({});

  useEffect(() => {
  
    const updatedLineItems = props.lineItems.map((item) => ({
      ...item,
      party: item.party.toString(),
    }));

    const data = {
      lineItems: updatedLineItems,
      taxes: JSON.stringify(props.tax),
      tipValues: JSON.stringify(props.tips),
    };
      
    setLineItems(data);
  // console.log(JSON.stringify(data));
  }, []);

  const deleteRecord = async () => {

    // console.log("Delete record called.");
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
        <Card sx={{ width:'100%', height: '100%'}} variant="outlined" >
          <CardContent>
            <CardActions>
              <Link
              href={{
                pathname: '/edit',
                query: {
                  search: JSON.stringify(items)
                }
              }}>
              Edit
            </Link>
            </CardActions>
            <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
              ID : {props._id}
            </Typography>
            <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
              Line Items : {JSON.stringify(props.lineItems)}
            </Typography>
            <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
              Tallies : {JSON.stringify(props.tallies)}
            </Typography>
            <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
              Tax : {JSON.stringify(props.tax)}
            </Typography>
            <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
              Tips : {JSON.stringify(props.tips)}
            </Typography>
            <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
              Created On : {JSON.stringify(props.createdAt)}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={deleteRecord}>Delete</Button>
          </CardActions>
        </Card>
      </div>
    </>
  )
}


export default Record;