import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Contact.css';

class CardComponent extends Component {
    render() {
        return (
            <div className="contact-card">
                <h3>Name: {this.props.name}</h3>
                <p>Mobile Number: {this.props.mobileNumber}</p>
                <p>Work Number: {this.props.workNumber}</p>
                <p>Email: {this.props.email}</p>
            </div>
            );
    }
};

CardComponent.propTypes = {
    name: PropTypes.string.isRequired,
    mobileNumber: PropTypes.string.isRequired,
    workNumber: PropTypes.string,
    email: PropTypes.string.isRequired
}

export default CardComponent;