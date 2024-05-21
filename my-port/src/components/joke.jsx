import React, { useState, useEffect } from 'react';

const Jokes = () => {
  const [joke, setJoke] = useState('');

  const fetchJoke = async () => {
    try {
      const response = await fetch('https://api.chucknorris.io/jokes/random');
      const data = await response.json();
      setJoke(data.value);
    } catch (error) {
      console.error('Error fetching joke:', error);
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className='jjj' style={{ padding: '20px', fontFamily: 'Arial, sans-serif', color: '#333' }}>
      <h1 className='jkk'>Chuck Norris Joke</h1>
      <p className='ll'>{joke}</p>
      <button className='bbb' onClick={fetchJoke} style={{ padding: '10px 20px', background: '#007BFF', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        Get Another Joke
      </button>
    </div>
  );
};

export default Jokes;
