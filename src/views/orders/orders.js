import React from 'react';
import {Title} from '../common';
import SearchOrder from './order-search/order-search';
import OrderDetails from './order-details/order-details';

import { connect } from 'react-redux';
import {actionSelectMenu} from '../../actions/index';

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = {
    actionSelectMenu
};

class Orders extends React.Component {
    componentDidMount() {
        this.props.actionSelectMenu(1);
    }

    render() {
        return (
            <div className='orders'>
                <Title text='Orders Site' />

                <div className='search-order-section'>
                    <SearchOrder />
                    <OrderDetails />
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders);