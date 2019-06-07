import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Decrement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: props.start
        }
    }

    dec = () => {
        if (this.state.num <= 0) {
            alert("Error:Number is less than 0");
        } else {
            this.setState({num: this.state.num - 1});
        }
    }

    render() {
        return (
            <div>
                <h3>{ this.state.num } </h3>
                <button onClick={this.dec}>Decrement</button>
            </div>
        );
    }
};

Decrement.propTypes = {
    start: PropTypes.number.isRequired
};

export default Decrement;