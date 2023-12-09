import React from 'react';

class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        radio_value: "",
      };
    }
  
    onChange = (event) => {
      this.setState({
        radio_value: event.target.value,
      });
    };
  
    render() {
      return (
        <div>
          <label>
            <input type="radio" name="radio" value="1 star" onChange={this.onChange}/> 1 Star 
          </label> <br />
          <label>
            <input type="radio" name="radio" value="2 stars" onChange={this.onChange} /> 2 Stars
           </label> <br />
           <label>
            <input type="radio" name="radio" value="3 stars" onChange={this.onChange} /> 3 Stars 
          </label> <br />
          <label>
            <input type="radio" name="radio" value="4 stars" onChange={this.onChange}/> 4 Stars 
          </label> <br />
          <label>
            <input type="radio" name="radio" value="5 stars" onChange={this.onChange}/> 5 Stars 
          </label> <br />
          <p>The selected value is: {this.state.radio_value}</p>
        </div>
      );
    }
  }

  export default MyComponent;
