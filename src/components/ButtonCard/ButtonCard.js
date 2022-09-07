import React from 'react';
import './ButtonCard.scss';
function ButtonCards({ icon, clickHandler, id, point }) {
  return (
    <div className="piece">
      <img
        className="piece__image"
        src={icon}
        onClick={() => clickHandler(point)}
        id={id}
        alt={id}
      />
    </div>
  );
}

export default ButtonCards;
