import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import { Route } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = (props) => {
  return (
    <div className='app-wrapper'>
      <HeaderContainer/>
      <Navbar/>
      <div className='app-wrapper-content'>
        <Route path='/dialogs' render={() =>
          <DialogsContainer
            store={props.store}
          />}
        />
        <Route path='/profile/:userId?' render={() =>
          <ProfileContainer
            store={props.store}
          />}
        />
        <Route path='/users' render={() =>
          <UsersContainer
            store={props.store}
          />}
        />
      </div>
    </div>
  )
}

export default App;
