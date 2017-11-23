import React, { Component } from 'react';

class Footer extends Component {

    render() {

        const styleObj = {
            backgroundColor: ""
        }

        return (
            <footer style={styleObj} className="container fixed-bottom text-center mt-3">
                <p className="lead"><strong>React Labb by: Mauricio &copy; 2017</strong></p>
            </footer>
        )
    }
}

export default Footer;