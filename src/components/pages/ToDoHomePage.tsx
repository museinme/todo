import React from 'react';
import {Link} from "react-router-dom";

export const ToDoHomePage = () => {
    return (
        <div className="home-page page">
            <h1>Welcome to the To-Do App!</h1>
            <p className="text">
                U can <Link to="/form">add</Link> and look
                through the <Link to="/list">list</Link> of your to-do's.
            </p>
        </div>
    );
};

export default ToDoHomePage;