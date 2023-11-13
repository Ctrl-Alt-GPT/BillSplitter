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

const prodURL = false;

const Record = (props) => {

  const [items, setLineItems] = useState({});

  useEffect(() => {
  
    // console.log(JSON.stringify(props));

    const updatedLineItems = props.lineItems.map((item) => ({
      ...item,
      party: item.party.toString(),
    }));

    const data = {
      _id: props._id,
      lineItems: updatedLineItems,
      taxes: JSON.stringify(props.tax),
      tipValues: JSON.stringify(props.tips),
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
        <Card sx={{ width:'100%', height: '100%'}} variant="outlined" >
          <CardContent>
              <Link
                href={{
                pathname: '/edit',
                query: { search: JSON.stringify(items) }
              }}>
              Edit
            </Link>
            <br></br>
            <br></br>
            <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
              ID : {items._id}
            </Typography>
            <Typography sx={{ fontSize: 16 }} component={'span'} color="text.secondary" gutterBottom>
              Line Items : 
              {props.lineItems.map((item, index) => (
                <div key={index}>
                  {JSON.stringify(item.title)} ${JSON.stringify(item.amount)}: {JSON.stringify(item.party)}
                </div>
              ))}
            </Typography>
            <Typography sx={{ fontSize: 16 }} component={'span'} color="text.secondary" gutterBottom>
              Tallies :
              {props.tallies.map((item, index) => (
                <div key={index}>
                  {JSON.stringify(item.party)} : ${JSON.stringify(item.share.toFixed(2))}
                </div>
              ))}
            </Typography>
            <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
              Tax : ${JSON.stringify(props.tax)}
            </Typography>
            <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
              Tips : ${JSON.stringify(props.tips)}
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