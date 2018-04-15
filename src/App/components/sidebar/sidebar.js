import React, { Component } from 'react'

import './css/sidebar.css'

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
    this.setItems = this.setItems.bind(this);
    this.renderItems = this.renderItems.bind(this);
    this.clickItem = this.clickItem.bind(this);
  }

  componentDidMount() {
    this.setItems()
  }
  
  componentWillReceiveProps(nextProps) {
    this.setItems()
  }

  setItems() {
    if(this.props.items) {
      
      let items = this.props.items
      
      items = items.map(( e, i ) => {
        if(i == 0 ) e.selected = true;
        else e.selected = false
        return e;
      })
      this.setState({items})
    }
  }


  renderItems(array) {
    return array.map(( e, i ) =>  <Item  onclick={ ()=> this.clickItem( e )} item={e} key={i} /> )
  };

  clickItem(item) {
    let items = this.state.items;
    
    items = items.map(( e ) => {
      if( e.id === item.id ) e.selected = true;
      else e.selected = false;
      return e;
    })

    this.setState({items});

    if(this.props.onClick) this.props.onClick(item.id);
  }
  
  render() {
    const { items } = this.state;
    const { children, style } = this.props;
    if( children) {
      return (
        <div className='sidebar' style={{...style}}>
        {  children }
      </div>
      )
    }
    return (
      <div className='sidebar' style={{ ...style }}>
        { this.renderItems(items )}
      </div>
    );
  }
}

export default Sidebar

const Item = ({onclick, item}) => (
  <div className={`item--menu ${ item.selected ? 'selected': ''}`} onClick={ ()=> onclick(item) } >
      { item.icon && <i className={`item--icon fa ${item.icon}`} /> }
      <span className='item--text'>{ item.text }</span>
  </div>
);