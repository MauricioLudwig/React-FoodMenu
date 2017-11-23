import React, { Component } from 'react';

class Footer extends Component {

    render() {

        const styleObj = {
            backgroundColor: "lightgray"
        }

        return (
            <footer style={styleObj} className="container fixed-bottom text-center pt-3">
                <p className="lead"><strong>By: Mauricio &copy; 2017</strong></p>
            </footer>
        )
    }
}

export default Footer;