import React from 'react'
import './style.css'

// images passed into each card

const CryptoCard = props => (
  <div 
  className="card"
  value={props.id} 
  onClick={() => props.handleClick(props.id)}>
    <div className="img-container">
      <img 
        alt="Crypto Logo"
        src={require("../../images" + props.image)}
      />
    </div>
  </div>
);

export default CryptoCard