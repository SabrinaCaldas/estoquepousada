import React from 'react';
import myIcon from '../assets/my-icon.svg'; 
import cadastrodeproduto  from '../assets/cadastrodeproduto.svg';

function MyComponent() {
  return (
    <div>
      <img src={myIcon} alt="Icone1" />
  
    <img src={cadastrodeproduto} alt="Icone2" />

  </div>
  );
}

export default MyComponent