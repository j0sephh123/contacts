import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from '../components/Home/Home';
import Form from '../Form/Form';
import Users from '../components/users/users';
import OneUser from '../components/OneUser/OneUser';
import Edit from '../components/Edit/Edit';
import history from '../history';

let currentUserObject = {};

const routes = (props) => {

  const onEditHandler = (id, user) => {
    currentUserObject['id'] = id;
    currentUserObject['user'] = user;
    console.log(currentUserObject);
    history.push(`/users/edit/${id}`);
  }
  
  return (
    <Switch>
      <Route exact path='/home' component={Home}></Route>
      <Route exact path='/form' component={Form}></Route>
      <Route exact path='/users/show/:userid' component={OneUser}></Route>
      <Route exact path='/users' render={() => <Users onEditHandler={onEditHandler} />}></Route>
      {/* <Route exact path='/users' component={Users}></Route> */}
      <Route exact path='/users/edit/:userid' 
        render={(props) => <Edit {...props} userDetails={currentUserObject} />}
      ></Route>
    </Switch>
  )
}

export default routes;