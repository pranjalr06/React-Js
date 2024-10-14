import { useState } from 'react'
import Tours from './components/Tours';
import data from './data';

function App() {

  const [tours , setTours] = useState(data);

  function removeTour(id) {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }

  if(tours.length === 0){
    return( 
      <div className='refresh'> 
        <h1 className='text-xl'>No Tours Left</h1>
        <button className='bg-black p-2 text-white m-3 rounded-md hover:opacity-80' onClick={() => setTours(data)}>Refresh</button>
      </div>
    );
  }

  return (
    <>
      <div className='app'>
        <Tours tours = {tours} removeTour={removeTour}></Tours>        
      </div>
    </>
  )
}

export default App
