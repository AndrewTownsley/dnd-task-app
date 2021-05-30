import React from 'react';

// This is where we will render our buttons to switch between categories.
const Categories = ({ categories, filterItems}) => {// {filterItems} is a prop passed in from the app component.  It must be passed into the component where it is returned in the App.js as well.
  return (
    <div className="btn-container">
      {categories.map((category,index) => {
        return <button type="button" className="filter-btn" key={index}
        onClick={() => filterItems(category)}
        >
          {category}
        </button>
      } )}
    </div>
  );
};

export default Categories;
