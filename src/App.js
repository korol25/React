import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Content from './components/Content/Content';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { BrowserRouter, Route } from 'react-router-dom';

const App = (props) => {
  debugger;
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navigation state={props.state.sidebar} />
        <div className='app-wrapper-content'>
          
          <Route path='/content'
            render={() => <Content
              store = {props.store} />} />
          
          
          <Route path='/dialogs'
            render={() => <DialogsContainer
              store = {props.store}/>} />
        </div>
        {/**/}
      </div>
    </BrowserRouter>
  );
}

export default App;
