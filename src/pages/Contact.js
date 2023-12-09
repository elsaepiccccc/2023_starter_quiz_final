import React from 'react';


import "../index.css";
import MyComponent from './MyComponent';

class Contact extends React.Component {

    greeting(name) {
        alert("Thank you for rating this app " + name);
    };

    hello(name) {
        alert("Hello " + name);
    }

    render() {
        return(
            <>
            <div>
                <br />
                <div>
                    <h1  className="text-3xl font-bold underline">Rate this quiz app!</h1>
                    <button onClick={() => this.greeting('!')}>rate</button>
                    <br />
                </div>
            </div>
            <MyComponent />
            </>
        );
    }
}

export default Contact;
