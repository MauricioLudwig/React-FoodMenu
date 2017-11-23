import React, { Component } from 'react';
import { Route, Link, NavLink } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Meat from './meat';
import Veggie from './veggie';


const MeatComp = (props) => {
    return (
        <Meat buy={this.addToCart.bind(this)} />
    );
}

const VeggieComp = (props) => {
    return (
        <Veggie buy={this.addToCart}/>
    );
}

class Home extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <Router>
                <div className="container">
                    <div class="alert alert-warning" role="alert">
                        {this.props.compName}
                    </div>
                    <div className="row mb-3">
                        <div className="col-sm-6 text-center">
                            <div className="category1"><NavLink activeClassName="active" to="/Meat">Meat</NavLink></div>
                        </div>
                        <div className="col-sm-6 text-center">
                            <div className="category2"><NavLink activeClassName="active" to="/Veggie">Veggie</NavLink></div>
                        </div>
                    </div>

                    <Route exact path='/Meat' render={() =><Meat meat={this.props.food.meat} category={"Meat"} buy={this.props.buyProduct}/>} />
                    <Route exact path='/Veggie' render={() =><Veggie veggie={this.props.food.veggie} category={"Veggie"} buy={this.props.buyProduct}/>} />

                </div>
            </Router>
        )
    }
}

export default Home;