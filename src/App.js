import React from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'
import data from './data';

const cards = data.map(card => {
  return(
    <Card key={1} {...card}/>
  )
})

function App() {
  return (
    <div className="App">
      <Navbar />
        
      <main className='main'>
          {cards}          
      </main>
    </div>
  );
}

export default App;
