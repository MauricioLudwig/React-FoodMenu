// Libraries
import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';

// Components
import Nav from './components/nav';
import Home from './components/home';
import Footer from './components/footer';
import Cart from './components/cart';

const HomeComp = (props) => {
  return (
    <Home compName={'Home'} />
  );
}

const CartComp = (props) => {
  return (
    <Cart compName={"Cart"} />
  )
};


class App extends Component {

  constructor() {
    super();
    this.state = {
      name: "Mauricio",
      food: {},
      cartSum: 0,
      cartItems: [],
    };
  }

  componentWillMount() {

    this.setState({

      food:
        {
          "meat":
            [
              {
                productName: "Sausage",
                price: 100
              },
              {
                productName: "Ham",
                price: 200
              },
              {
                productName: "Hamburger",
                price: 300
              },
              {
                productName: "Minced Meat",
                price: 400
              }
            ],
          "veggie": [
            {
              productName: "Veggie Minced Meat",
              price: 50
            },
            {
              productName: "Sallad",
              price: 60
            },
            {
              productName: "Soy Beans",
              price: 70
            },
            {
              productName: "Pasta",
              price: 80
            },
          ],
        }
    })
  }

  addToCart(name, price){
    console.log('Add to cart');
    console.log(name);
    console.log(price);

    var newItem = {
      "name": name,
      "price": price,
    };

    this.state.cartItems.push(newItem);

    console.log(this.state.cartItems);

    this.setState({
      cartSum: this.state.cartSum + price,
      cartItems: this.state.cartItems,  
    })
  }

  removeFromCart(index, price){
    
    console.log('Remove from cart');
    console.log(index);
    console.log(price);

    var list = this.state.cartItems;
    list.splice(index, 1);
    this.setState({
      cartItems: list,
      cartSum: this.state.cartSum - price,
    })
  }

  clearCart(){
    console.log('Clear cart');
    this.setState({
      cartSum: 0,
      cartItems: [],
    })
  }

  render() {

    return (

      <Router>
        <div className="container">
          {/* Navbar */}
          <div className="row">
            <div className="col-sm-10 offset-sm-1">
              <Nav cartSum={this.state.cartSum} />
            </div>
          </div>
          {/* Home */}
          <div className="row">
            <div className="col-sm-10 offset-sm-1">
              <Route exact path="/" render={()=><Home compName={"Home"} food={this.state.food} buyProduct={this.addToCart.bind(this)}/>}/>
            </div>
          </div>
          {/* Cart */}
          <div className="row">
            <div className="col-sm-10 offset-sm-1">
              <Route exact path='/cart' render={() => <Cart compName={"Cart"} clearCart={this.clearCart.bind(this)} cartItems={this.state.cartItems} removeProduct={this.removeFromCart.bind(this)}/>} />
            </div>
          </div>
          {/* Footer */}
          <div className="row">
            <div className="col-sm-10 offset-sm-1">
              <Footer />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
