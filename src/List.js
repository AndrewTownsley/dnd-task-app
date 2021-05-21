import React from 'react';

const List = ({ people }) => {// Taking the "people" objects from the "data" component as declared in the useState method.  
  return (//  We the map over the list of people, using the id, name, age, and image properties from their respective objects, and creating an article element that displays all of those properties and how old the person is.
    <>
      {people.map((person) => {
        const {id, name, age, image} = person;
        return <article key={id} className="person">
          <img src="{image}" alt="{name}"/>
          <div>
            <h4>{name}</h4>
            <p>{age} years</p>
          </div>
        </article>
      })}
    </>
  );
};

export default List;
