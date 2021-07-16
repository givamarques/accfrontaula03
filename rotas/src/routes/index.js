import React from 'react'
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import WhoWeAre from "../pages/Whoweare";
import Products from "../pages/Products";
import Contacts from "../pages/Contacts";
import Navbar from '../components/Navbar/Navbar';

export default function Routes() {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/whoweare" component={WhoWeAre} />
                <Route path="/products" component={Products} />
                <Route path="/contacts" component={Contacts} />
            </Switch>
        </div>
    )
}