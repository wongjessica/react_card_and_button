import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types';
//import React, {Component} from 'react';
import logo from './logo.svg';
import './Contact.css';
/*
function Contact() {
  return (
    <div className="Contact">
      <header className="Contact-header">
        <img src={logo} className="Contact-logo" alt="logo" />
        <p>
          Edit <code>src/Contact.js</code> and save to reload.
        </p>
        <a
          className="Contact-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello World
        </a>
      </header>
    </div>
  );
}
*/

class contactCard extends Component {
  render() {
  return <h1>Hello {this.props.name}!</h1>
  }
};

contactCard.propTypes = {
  name: PropTypes.string
};
  
  ReactDOM.render(<contactCard name="Tom" />)

export default contactCard;
