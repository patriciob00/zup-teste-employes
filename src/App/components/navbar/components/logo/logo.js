import React from 'react';
import './css/logo.css';

export default ({ img, style }) => (
  <div className='logo' style={ {...style} }>
    <img src={img}  alt='logomarca'/>
  </div>
);