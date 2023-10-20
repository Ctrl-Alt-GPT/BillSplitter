'use client'
import { useEffect, useState } from 'react';

const Search = () => {

  const [persons, setPersons] = useState("");

  useEffect(() => {

    const fetchPersons = async () => {

      try {
        const response = await fetch('http://localhost:3333/sean/getAll');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        setPersons(response.text());
      } catch (error) {
        console.error('Error fetching data:', error);
    }
  }
  fetchPersons();
  }, [])

  return (
    <>
      Here are all the records:<br></br>
      <div>{persons}</div>
    </>
  )
};

export default Search;
