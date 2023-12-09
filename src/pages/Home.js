import React from 'react';
import { Link, Outlet } from "react-router-dom";

class Home extends React.Component {

    render() {
        // Inline CSS for text shadow
        const headerStyle = {
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' // Shadow effect
        };

        return(
            <>
                <h1 style={headerStyle}>HOME PAGE</h1>
                <Link to="/Quiz">Quiz</Link> {  }
                <Link to="/Score">Score</Link> {  }
                <Link to="/Contact">Feedback</Link> { }
		        <Link to="/TabExample">Hints</Link> { }
		
                
                <Outlet />
            </>
        );
    }
}

export default Home;
