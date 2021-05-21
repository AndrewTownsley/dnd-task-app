import React, { useState } from 'react';
import data from './data';
import List from './List';

function App() {

  const [people, setPeople] = useState(data);// The "people" from the array of objects in the  "data" component.  These "people"are passed in as a prop to the List component.

  return (
    <main>
    <section className="container">
      <h3>{people.length} birthdays today</h3>
      <List people={people}/>
      <button onClick={() => setPeople([])}>clear all</button>
    </section>
  </main>
    )
}

export default App;
