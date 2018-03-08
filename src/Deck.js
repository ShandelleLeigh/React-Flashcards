import React from 'react';
import Card from './Card';
require:'map.js';

// import Todo from './Todo';

const Deck = ({ items, cardClick }) => (
  <ul>
    { items.map( card =>
      <Card key={card.id}
      cardClick={cardClick}
      {...card} />
    )}
  </ul>
)

export default Deck;
