import React, { Component } from 'react';

import './css/main-container.css';
import Navbar from '../../components/navbar/navbar';
import Sidebar from '../../components/sidebar/sidebar';
import InnerContent from '../../components/inner-content/inner-content';

class MainContainer extends Component {
    constructor(props) {
        super(props);
    
    }

    render() {
        return (
            <div className='main--container'>
                <Navbar />
                <section className='content'>
                    <Sidebar items={ items } />
                    <InnerContent />
                </section>
            </div>
        );
    } 
}

const items = [
    { icon: 'fa-list-alt', text:'Todos', id: 'todos' },
    { icon: 'fa-check-square-o', text:'Atendidos', id: 'atendidos' },
    { icon: 'fa-trash-o', text:'Lixeira', id: 'lixeira' }
];

export default MainContainer;