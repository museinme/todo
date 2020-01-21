import React from 'react';

export const ToDoHomePage = () => {
    return (
        <div className="home-page page">
            <h1>Welcome to the To-Do App!</h1>
            <p className="text">
                U can <a href="/form">add</a> and look
                through the <a href="/list">list</a> of your to-do's.
            </p>
        </div>
    );
};

export default ToDoHomePage;