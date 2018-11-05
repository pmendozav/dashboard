import React from 'react';
import './menu.css';

import { NavLink } from 'react-router-dom'

import * as Icon from 'react-feather';

class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            api_menu_opened: false
        };
    }
    


    render() {
        return (
            <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                <div className="sidebar-sticky">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <NavLink to='/'>
                                <div className="nav-link active">
                                    <Icon.Home className="feather" />
                                    Home
                                <span className="sr-only">(current)</span>
                                </div>
                            </NavLink> 
                        </li>
                        <li className="nav-item">
                            <NavLink to='/orders'>
                                <div className="nav-link">
                                    <Icon.ShoppingCart className="feather" />
                                    Orders
                            </div>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/merchant'>
                                <div className="nav-link">
                                    <Icon.Users className="feather" />
                                    Merchants
                            </div>
                            </NavLink>
                        </li>
                        <li className="nav-item" onClick={() => this.setState({ api_menu_opened: !this.state.api_menu_opened })}>
                            {/* <NavLink to='/api'> */}
                                <div className="nav-link">
                                    <Icon.Layers className="feather" />
                                    API
                                </div>
                            {/* </NavLink> */}

                            <ul className={"nav flex-column " + (this.state.api_menu_opened ? "collapse-show" : "collapse") + ""}>
                                <li className="nav-item submenu">
                                    <NavLink to='/api'>
                                        <div className="nav-link">
                                            <Icon.Archive className="feather" />
                                            api_call_report
                                        </div>
                                    </NavLink>                                
                                </li>
                                <li class="nav-item submenu">
                                    <NavLink to='/api/edt'>
                                        <div className="nav-link">
                                            <Icon.Archive className="feather" />
                                            edt_call
                                        </div>
                                    </NavLink>
                                </li>
                                <li class="nav-item submenu">
                                    <NavLink to='/api'>
                                        <div className="nav-link">
                                            <Icon.Archive className="feather" />
                                            connect_landed_cost
                                        </div>
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        





                    </ul>

                    <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                        <span>Reports and Jobs</span>
                        <div className="d-flex align-items-center text-muted">
                            <Icon.PlusCircle className="feather" />
                        </div>
                    </h6>
                    <ul className="nav flex-column mb-2">
                        <li className="nav-item">
                            <div className="nav-link">
                                <Icon.FileText className="feather" />
                                Current month
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Menu;