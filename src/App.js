import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Content from './components/Content/Content';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';

const App = (props) => {

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navigation state={props.state.topFriendsList} />
        <div className='app-wrapper-content'>
          
          <Route path='/content'
            render={() => <Content
              profilePage={props.state.profilePage}
              dispatch={props.dispatch} />} />
          
          
          <Route path='/dialogs'
            render={() => <Dialogs
              store = {props.store}
              dispatch={props.dispatch}
               />} />
        </div>
        {/**/}
      </div>
    </BrowserRouter>
  );
}

export default App;
