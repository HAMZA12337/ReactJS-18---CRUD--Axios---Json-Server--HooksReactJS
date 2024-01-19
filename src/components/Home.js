import React, { useEffect } from 'react';

function Home() {
 
 
  useEffect(() => {
    // alert("Home Component Loaded!"); // This will run when the component mounts (onload)
    
    // Optional cleanup code goes here
    return () => {
      // Cleanup code if needed when the component unmounts
    };
  }, []); // The empty dependency array ensures that this effect runs only once on component mount

  return (
  
   
      <h1>Home</h1>
   
  
  
  
  
    );
}

export default Home;
