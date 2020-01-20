// @ts-nocheck
import React from 'react';
import {Switch, Route, Link} from "react-router-dom";
import { observer } from 'mobx-react';
import ToDoHomePage from './pages/ToDoHomePage';
import ToDoForm from './ToDoForm';

export class App extends React.Component<any, any> {

  render() {

    return (
        <>
          <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/form'>To-Do Form</Link></li>
            </ul>
          </nav>
          <Switch>
            <Route exact path='/' component={ToDoHomePage}/>
            <Route exact path='/form' component={ToDoForm}/>
          </Switch>
        </>
    );
  }
};

export default observer(App);
