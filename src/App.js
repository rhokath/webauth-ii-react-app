import React from 'react';
import Login from './components/UserLogin';
import Register from './components/RegisterUser';
import UserList from './components/UserList';
import Home from './components/HomePage';
import {Route} from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        hello world
      </header>
      <Route  exact path="/" component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>
      <Route path="/users" component={UserList}/>
    </div>
  );
}

export default App;
