import React from 'react';

import './list-card.css';

export default (props) => (
    <div className={'card-wrapper'}>
        <section className={'thumbs'}>
            <img className={'img-thumb'} src={'http://instantsimple.siteyourart.com/sites/default/files/tim/Michelle-Borromeo-Actor-Headshots-Vancouver-BC20110408_0030.jpg'}  />
            <span className={''}>Lorraine</span>
        </section>

        <section className={'personal-info'}>
            <span className={'email'}>lorrainebeck@hotmail.com</span>
            <span className={'tel'}>(960)8957-5784</span>
            <span className={'localization'}>Fortaleza-CE</span>
        </section>
           
        <section className={'actions'}>
            <div className={ 'actionButton'}>
                <i className={'fa fa-list-alt'} />
            </div>
            <div className={'actionButton'}>
                <i className={'fa fa-check-square-o'} />
            </div>
            <div className={'actionButton'}>
                <i className={'fa fa-trash-o'} />
            </div>
        </section>
    </div>
);