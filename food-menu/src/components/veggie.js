import React, { Component } from 'react';

class Veggie extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        let veggieItems = this.props.veggie.map((item, i) => {
            return (
                <div className="listFoodItemBox">
                    <h3 className="text">{item.productName}</h3>
                    <p className="lead">Pris: {item.price}</p>
                    <button class="btn btn-success" onClick={this.props.buy.bind(this, item.productName, item.price)}>Buy</button>
                </div>
            );
        });

        return (
            <div>
                <div class="alert alert-danger text-center" role="alert">{this.props.category}</div>
                {veggieItems}
            </div>
        )
    }

}

export default Veggie;