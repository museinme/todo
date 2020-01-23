// @ts-nocheck
import React from 'react';
import {Switch, Route, Link} from "react-router-dom";
import { observer } from 'mobx-react';
import ToDoHomePage from './components/pages/ToDoHomePage';
import ToDoFormPage from './components/pages/ToDoFormPage';
import { ToDoListPage } from './components/pages/ToDoListPage';

export class App extends React.Component<any, any> {

  render() {

    return (
        <>
            <header className="header">
                <nav className="menu">
                    <ul className="list">
                        <li className="item"><Link to='/'>Home</Link></li>
                        <li className="item"><Link to='/form'>To-Do Form</Link></li>
                        <li className="item"><Link to='/list'>To-Do List</Link></li>
                    </ul>
                </nav>
            </header>
            <Switch>
                <Route exact path='/' component={ToDoHomePage}/>
                <Route path='/form' component={ToDoFormPage}/>
                <Route path='/list' component={ToDoListPage}/>
            </Switch>
        </>
    );
  }
};

export default observer(App);
