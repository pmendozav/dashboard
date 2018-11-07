import React from 'react';
import './menu.css';

import { NavLink } from 'react-router-dom'

import * as Icon from 'react-feather';

import { connect } from 'react-redux';

import {actionSelectMenu} from '../../actions/index';

const mapStateToProps = state => {
    return {
        menuSelected: state.defaultReducer.menuSelected,
    };
};

const mapDispatchToProps = {
    actionSelectMenu
};

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
                                <div className={"nav-link " + ((this.props.menuSelected == 0) ? "active" : "")}>
                                    <Icon.Home className="feather" />
                                    Home
                                    {/* {this.props.menuSelected == 1 ? <span className="sr-only">(current)</span> : ""} */}
                                </div>
                            </NavLink> 
                        </li>
                        <li className="nav-item">
                            <NavLink to='/orders'>
                                {/* <div className="nav-link"> */}
                                <div className={"nav-link " + ((this.props.menuSelected == 1) ? "active" : "")}>
                                    <Icon.ShoppingCart className="feather" />
                                    Orders
                            </div>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/merchant'>
                                {/* <div className="nav-link"> */}
                                <div className={"nav-link " + ((this.props.menuSelected == 2) ? "active" : "")}>
                                    <Icon.Users className="feather" />
                                    Merchants
                            </div>
                            </NavLink>
                        </li>

                        <li className="nav-item">
                        <NavLink to='/api'>
                            <div className="nav-link d-flex justify-content-between" onClick={() => { this.props.actionSelectMenu(3); }}>
                                <span>
                                    <Icon.Users className="feather" />
                                    Api
                                    </span>
                                <div className="d-flex align-items-center"> {/* text-muted */}
                                    {((3 <= this.props.menuSelected && this.props.menuSelected <= 6) ? <Icon.MinusCircle className="feather" /> : <Icon.PlusCircle className="feather" />)}
                                </div>
                            </div>
                            </NavLink>
                            <ul className={"nav flex-column collapse" + ((3 <= this.props.menuSelected && this.props.menuSelected <= 6) ? "-show" : "")}>
                                <li className="nav-item submenu">
                                    <NavLink to='/api/report'>
                                        <div className={"nav-link " + ((this.props.menuSelected == 4) ? "active" : "")}>
                                            <Icon.Archive className="feather" />
                                            api_call_report
                                        </div>
                                    </NavLink>                                
                                </li>
                                <li class="nav-item submenu">
                                    <NavLink to='/api/edt'>
                                        <div className={"nav-link " + ((this.props.menuSelected == 5) ? "active" : "")}>
                                            <Icon.Archive className="feather" />
                                            edt_call
                                        </div>
                                    </NavLink>
                                </li>
                                <li class="nav-item submenu">
                                    <NavLink to='/api/landed'>
                                        <div className={"nav-link " + ((this.props.menuSelected == 6) ? "active" : "")}>
                                            <Icon.Archive className="feather" />
                                            connect_landed_cost
                                        </div>
                                    </NavLink>
                                </li>
                            </ul>
                        </li>


                        {/* <li className="nav-item" onClick={() => {this.props.actionSelectMenu(3);}}>
                            <div className="nav-link">
                                <Icon.Layers className="feather" />
                                API
                            </div>

                            <ul className={"nav flex-column collapse" + ((3 <= this.props.menuSelected && this.props.menuSelected <= 5 ) ? "-show" : "")}>
                                <li className="nav-item submenu">
                                    <NavLink to='/api'>
                                        <div className={"nav-link " + ((this.props.menuSelected == 3) ? "active" : "")}>
                                            <Icon.Archive className="feather" />
                                            api_call_report
                                        </div>
                                    </NavLink>                                
                                </li>
                                <li class="nav-item submenu">
                                    <NavLink to='/api/edt'>
                                        <div className={"nav-link " + ((this.props.menuSelected == 4) ? "active" : "")}>
                                            <Icon.Archive className="feather" />
                                            edt_call
                                        </div>
                                    </NavLink>
                                </li>
                                <li class="nav-item submenu">
                                    <NavLink to='/api'>
                                        <div className={"nav-link " + ((this.props.menuSelected == 5) ? "active" : "")}>
                                            <Icon.Archive className="feather" />
                                            connect_landed_cost
                                        </div>
                                    </NavLink>
                                </li>
                            </ul>
                        </li> */}
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

// export default Menu;
export default connect(mapStateToProps, mapDispatchToProps)(Menu);