import { useState } from 'react';
import axios from 'axios';
import './App.css';
import Form from './Form';
import Signin from './Signin'; // Ensure this is the correct import for the Signin component
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import necessary modules from react-router-dom

function App() {
  const [detail, setDetail] = useState('default');
  const [isLogedIn, setIsLogedIn] = useState(false);

  async function handleClick() {
    try {
      const response = await axios.get('https://gatback.onrender.com/');
      setDetail(response.data);
      console.log(response);
    } catch (error) {
      console.error('Error fetching data:', error);
      setDetail('Error fetching data');
    }
  }

  return (
    <>
      
       <button onClick={handleClick}>Fetch from Backend</button>
      <h1>{detail}</h1>
      <BrowserRouter>
        <Routes>
          {isLogedIn ? (
            <Route path="/" element={<Signin />} />
          ) : (
            <Route path="/" element={<Form setIsLogedIn={setIsLogedIn} />} />
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;



