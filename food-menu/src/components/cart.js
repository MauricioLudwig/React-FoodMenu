import React, { Component } from 'react';

class Cart extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        console.log(this.props.compName);

        return (
            <div className="container">
                <div class="alert alert-primary" role="alert">
                    <p className="lead text-center">{this.props.compName}</p>
                    <span class="input-group-btn">
                        <button onClick={this.props.clearCart.bind(this)} className="btn btn-danger btn-block">Clear Cart</button>
                    </span>
                </div>
            </div>
        )
    }
}

export default Cart;