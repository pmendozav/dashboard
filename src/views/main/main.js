import React from 'react';

import WorkSpace from '../workspace/workspace';
import NavBar from '../../components/navbar/navbar';
import Menu from '../../components/menu/menu';

import './main.css';

class Main extends React.Component {
    render() {
        return (
            <div className='Main'>
                <NavBar />

                <div className="container-fluid">
                <Menu />

                    <div className="row">

                        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                            <WorkSpace />
                        </main>
                    </div>
                </div>
            </div>



        );
    }
}

export default Main;