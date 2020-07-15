import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Content from './components/Content/Content';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import StoreContext from './StoreContext';
import DialogsContainer from './components/Dialogs/DialogsContainer';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <StoreContext.Consumer>
          { (store)=>{
            let state = store.getState().sidebar;
        return <Navigation 
        state ={state}
        //state={props.state.sidebar} 
        />
      }
      }
        </StoreContext.Consumer>
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
