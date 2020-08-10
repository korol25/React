import React, { Suspense } from 'react';
import './App.css';
import { BrowserRouter, Route} from 'react-router-dom';
//import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavigationContainer from './components/Navigation/NavigationContainer';
import UsersContainer from './components/Users/UsersContainer';
//import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { inizializeApp } from './redux/app-reducer';
import Preloader from './components/Common/Preloader/Preloader';
import { withSuspence } from './hoc/withSuspence';

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));

class App extends React.Component {
  componentDidMount() {
    this.props.inizializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <BrowserRouter>
        <div className="app-wrapper">
          <HeaderContainer />
          <NavigationContainer />

          <div className='app-wrapper-content'>

            <Route path='/profile/:userId?'
              render={withSuspence(ProfileContainer)}/>

            <Route path='/dialogs'
              render={withSuspence(DialogsContainer)}/>
            <Route path='/users'
              render={() => <UsersContainer />} />
            <Route path='/login'
              render={() => <LoginPage />} />
          </div>
          {/**/}
        </div>
      </BrowserRouter>
    );
  }
}
const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
})

export default compose(
  connect(mapStateToProps, { inizializeApp }))(App);

