import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Home from '../home/home';
import Orders from '../orders/orders';
import Merchant from '../merchant/merchant';
import Api from '../api/api';

import './workspace.css';


class WorkSpace extends Component {
  render() {
    return (
      // <LogIn />
      <div className='workspace'>
        <Route exact path="/" component={Home} />
        <Route path="/orders" component={Orders} />
        <Route path="/merchant" component={Merchant} />
        <Route path="/api" component={Api} />
      </div>
    );
  }
}

export default WorkSpace;
