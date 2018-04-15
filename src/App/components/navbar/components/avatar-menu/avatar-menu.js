import React, {Component} from 'react';
import './css/avatar-menu.css';

class AvatarMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatarExpanded: false
    }
  }
  

  render() {
    const { photo } = this.props;
    const { avatarExpanded } = this.state;
    return (
      <div className="avatar-dropdown">
        <div className="avatar" onClick={() => this.setState({avatarExpanded: !avatarExpanded})} >
          { photo && <img className="avatar-img" src={photo} alt="avatar" /> }
          { !photo && <i className='fa fa-user' />}
        </div>
        <div className={'dropdown-content ' + (avatarExpanded ? 'show' : '')}>
          <div className="arrow" />

          { this.props.children }
          {/* <span>
            <button type="button" className="button-logout" >
              Sair
            </button>
          </span> */}
        </div>
      </div>
    );
  }
}

export default AvatarMenu;
