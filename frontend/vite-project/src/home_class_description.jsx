import React, { useState, useEffect } from 'react';
export default function Description({classID}) {
    const [data, setData] = useState([]);
  const classNumber = classID;
  const apiLink = `http://localhost:3004/getClass?id=${classNumber}`;
  console.log(apiLink);
  useEffect(() => {
    // Function to fetch data from the server
    const fetchData = async () => {
      try {
        // Replace 'your-api-endpoint' with the actual API endpoint for your SQL database
        const response = await fetch(apiLink);
        
        // Check if the response is successful (status code 200)
        if (response.ok) {
          const result = await response.json();
          setData(result);
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, []); // The empty dependency array ensures that the effect runs once when the component mounts
    return (
        <div id="description">
            <div>
                <h6 id="days">{data.days} @ {data.start} </h6>
            </div>
            <h1>{data.classNumber}</h1>
            <h3>{data.name}</h3>
        </div>
    )
}
