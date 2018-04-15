import React, { Component } from 'react';

import './css/inner-content.css';

import Card from './components/list-card/list-card';

class InnerContent extends Component {
    render() {
        return (
            <div className='inner-content-wrapper'>
                <div className='inner-wrapper'>
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        );
    }
}

export default InnerContent;