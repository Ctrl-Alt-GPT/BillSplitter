'use client'
import { useEffect, useState } from 'react';

const Search = () => {

  const [records, setrecords] = useState("");

  useEffect(() => {

    const fetchrecords = async () => {

      try {
        const response = await fetch('http://localhost:3333/sean/getAllBills');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        setrecords(response.text());
      } catch (error) {
        console.error('Error fetching data:', error);
    }
  }
  fetchrecords();
  }, [])

  return (
    <>
      Here are all the records:<br></br>
      <div>{records}</div>
    </>
  )
};

export default Search;
