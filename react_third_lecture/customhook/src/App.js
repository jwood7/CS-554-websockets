import React from 'react';
import './App.css';
import useAxios from './useAxios';

function App() {
  let {data, loading} = useAxios('https://pokeapi.co/api/v2/pokemon');
  return (
    <div className='App'>
      <div>
        {loading ? (
          'Loading...'
        ) : (
          data.results.map((show) => {
            return (
              <div key={show.id} id={show.id}>
                {show.name}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default App;
