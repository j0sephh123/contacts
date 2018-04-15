import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from '../components/Home/Home';
import Form from '../Form/Form';
import Users from '../components/users/users';

const routes = () => {
  return (
    <Switch>
      <Route path='/home' component={Home}></Route>
      <Route path='/form' component={Form}></Route>
      <Route path='/users' component={Users}></Route>
    </Switch>
  )
}

export default routes;