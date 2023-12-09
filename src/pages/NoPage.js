import React from 'react';
import "../index.css";
import MyComponent from './MyComponent';

class TabExample extends React.Component {

    showHint(hint) {
        alert("Hint: " + hint);
    };

    render() {
        return(
            <>
            <div>
                <br />
                <div>
                    <h1  className="text-3xl font-bold underline">Hints for every question!</h1>
                    <button onClick={() => this.showHint('It is the largest city in Australia.')}>Question 1</button><br /><br />
                    <button onClick={() => this.showHint('It doesn\'t start with a W.')}>Question 2</button><br /><br />
                    <button onClick={() => this.showHint('It starts with an A.')}>Question 3</button><br /><br />
                    <button onClick={() => this.showHint('This piece of art was created during the Renaissance.')}>Question 4</button><br /><br />
                    <button onClick={() => this.showHint('Water is composed of two hydrogen atoms and one oxygen atom.')}>Question 5</button><br /><br />
                    <button onClick={() => this.showHint('This sport doesn\'t take place on a court.')}>Question 6</button><br /><br />
                    <button onClick={() => this.showHint('The number of months in a year.')}>Question 7</button><br /><br />
                    <button onClick={() => this.showHint('This type of year has one extra day than usual.')}>Question 8</button><br /><br />
                    <button onClick={() => this.showHint('This country is well known for their pastries.')}>Question 9</button><br /><br />
                    <button onClick={() => this.showHint('This person co-founded a major tech company with Steve Wozniak.')}>Question 10</button><br /><br />
                </div>
            </div>
            
            </>
        );
    }
}

export default TabExample;
