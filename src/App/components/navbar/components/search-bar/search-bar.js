import React from 'react';

import './css/search-bar.css';

export default ({ onKeypress, onChange, icon, style, placeholder, value }) => (
  <div className='search-bar-group' style={{ ...style }}>
    { icon && <span className='search-icon'><i className={`fa ${icon}`} /></span> }
    <input className='search-input' value={ value } type={'text'} onChange={ onChange } onKeyPress={ onKeypress } placeholder={ placeholder } />
  </div>
);