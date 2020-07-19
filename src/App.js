import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Content from './components/Content/Content';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavigationContainer from './components/Navigation/NavigationContainer';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <NavigationContainer />

        <div className='app-wrapper-content'>
          
          <Route path='/content'
            render={() => <Content
              //store = {props.store}
               />} />
          
          


          
          <Route path='/dialogs'
            render={() => <DialogsContainer
              //store = {props.store}
               // dispatch={props.dispatch}
               />} />
        </div>
        {/**/}
      </div>
    </BrowserRouter>
  );
}

export default App;
