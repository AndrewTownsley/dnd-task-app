import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories = ["all",...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if(category === 'all') {
      setMenuItems(items);// If the filterItems function is run and finds the category of the string passed into the function as an argument is equal to 'all', it will display all menu items.
      return;
    }
    const newItems = items.filter((item) => 
      item.category === category)
      setMenuItems(newItems)
  }


  return (
    <section className="menu section">
      <div className="title">
        <h2>Menu</h2>
        <div className="underline"></div>
      </div>
      <Categories categories={categories} filterItems={filterItems}/>
      <Menu items={menuItems} />
    </section>
  );
}

export default App;
