import React, { Component } from 'react';

class Cart extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        console.log(this.props.compName);

        let displayCartItem = this.props.cartItems.map((item, i) => {
            return (
                <div className="row">
                    <div className="cartItems text-center col">
                        <h5>{item.name}</h5>
                        <p className="lead">Pris: {item.price} kr</p>
                        <button onClick={this.props.removeProduct.bind(this, i, item.price)} className="btn btn-danger">Remove</button>
                    </div>
                </div>
            );
        });

        return (
            <div className="container">
                <div class="alert alert-primary" role="alert">
                    <p className="lead text-center">{this.props.compName}</p>
                    <span class="input-group-btn">
                        <button onClick={this.props.clearCart.bind(this)} className="btn btn-danger btn-block">Clear Cart</button>
                    </span>
                </div>
                {displayCartItem}
            </div>
        )
    }
}

export default Cart;