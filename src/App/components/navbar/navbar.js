import React, { Component } from 'react'
import './css/navbar.css'

import img from '../../../assets/img/zup-logo.png';

// componentes
import Logo from './components/logo/logo';
import SearchBar from './components/search-bar/search-bar';
import AvatarMenu from './components/avatar-menu/avatar-menu';


class Navbar extends Component {
  render() {
    return (
      <div className='navbar'>
        <Logo img={img} />
        <SearchBar icon='fa-search' placeholder='Buscar' />
        <AvatarMenu>
          <span>
            <button type="button" className="button-logout" >
              Sair
            </button>
          </span>
        </AvatarMenu>
      </div>
    );
  }
}

export default Navbar;