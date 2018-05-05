import React from 'react';
import Welcome from './welcome';
import Nav from './nav';
import Macarons from './our_macarons';
import Gifts from './gifts_parties';
import Contact from './contact';
import {Route} from 'react-router-dom';

export default ()=>{
    return(
        <div className="container">
        <Nav/>
        <Route exact path="/" component={Welcome}/>
        <Route path="/macarrones" component={Macarons}/>
        <Route path="/contactanos" component={Contact}/>
        <Route path="/regalos-y-fiestas" component={Gifts}/>
        </div>
    )
}

