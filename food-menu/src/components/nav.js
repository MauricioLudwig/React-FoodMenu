import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (

            // <nav className="navbar navbar-expand-lg navbar-light bg-light">
            //     <div className="container-fluid">
            //         <div className="navbar-header">
            //             <ul className="nav navbar-nav">
            //                 <li><NavLink activeClassName="active" to="/">Home</NavLink></li>
            //                 <li><NavLink activeClassName="active" to="/Meat">Meat</NavLink></li>
            //                 <li><NavLink activeClassName="active" to="/Veggie">Veggie</NavLink></li>
            //             </ul>
            //         </div>
            //         <ul className="nav navbar-nav navbar-right">
            //             <li><NavLink activeClassName="active" to="/Cart">Cart</NavLink></li>
            //         </ul>
            //     </div>
            // </nav>

            <ul class="nav justify-content-center mt-3 mb-3">
                <li class="nav-item">
                    <a class="nav-link"><NavLink activeClassName="active" to="/">Home</NavLink></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled"><NavLink activeClassName="active" to="/Cart">Cart: {this.props.cartSum}</NavLink></a>
                </li>
            </ul>


        );
    };
}

export default Nav;