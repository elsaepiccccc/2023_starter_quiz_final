import React from 'react';
import my_state from './my_state';

class Score extends React.Component {

    render() {
        // Inline CSS for text shadow
        const headerStyle = {
            textShadow: '2px 2px 4px #000000'  // Example: black shadow with 2px horizontal and vertical offset, and 4px blur
        };

        return(
            <>
                <h1 style={headerStyle}>Score Page</h1>

                <h2> Your score is: {my_state.my_score} / {my_state.my_count} </h2>
                <br/>
                <br/>
            </>
        );
    }
}

export default Score;
