import React from 'react';
import Card from './Contact.js';
import Decrement from './Decrement';


function App() {
    return (
        <div>
            <div className="container">
                <Card name="John Doe" mobileNumber="123-456-7890" email="john@doe.com" />
                <Card name="Jessica Wong" mobileNumber="555-555-5555" email="jessica@wong.com" workNumber="333-888-8888"/>
                <Card name="Samuel Adams" mobileNumber="666-666-7889" email="samuel@adams.com" workNumber="888-888-8888" />
            </div>
            <div className="container">
            <Decrement start={25} />
            </div>
        </div>
        );
}

export default App;
