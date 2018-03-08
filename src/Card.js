import React from 'react';

const styles = {
  card: { cursor: 'pointer' },
  show: {
    visiblity: 'visible',
  }
}

const Card = ({ id, name, show, cardClick }) => (
  <li
    onClick={() => cardClick(id)}
    style={ show ?
      {...styles.card, ...styles.show} :
      styles.card
    }
  >
    {name}
  </li>
)

export default Card
