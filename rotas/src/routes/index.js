import React from 'react';
import Home from '../pages/Home';
import WhoWeAre from '../pages/Whoweare';
import Products from '../pages/Products';
import Contacts from '../pages/Contacts';
import Navbar from '../components/Navbar';
import { Switch, Route } from 'react-router-dom';

export default function Routes(){
    return(
        <div>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/WhoWeAre" component={WhoWeAre} />
                <Route path="/Products" component={Products} />
                <Route path="/Contacts" component={Contacts} />
            </Switch>
        </div>
    )
}