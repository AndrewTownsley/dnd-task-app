import React, { useState } from 'react';

const Tour = ({ id,image,info,price,name,removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-tour">
        <img src={image} alt={name} />
        <footer>
          <div className="tour-info">
            <h4>{name}</h4>
            <h4 className="tour-price">{price}</h4>
            <p>{readMore ?info :  `${info.substring(0,200)}`}...</p>
            <button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'show less' : 'show more'}
            </button>
            <button className="delete" onClick={() => removeTour(id)}>Not Interested</button>
          </div>
        </footer>
    </article>
  )
};

export default Tour;