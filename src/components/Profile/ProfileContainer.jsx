import React from 'react';
import classes from './Profile.module.css';
import Profile from './Profile';
import { connect } from 'react-redux';
import * as axios from 'axios'
import {getUserProfile, getStatus, updateStatus} from './../../redux/profile-reducer'
import { withRouter, Redirect } from 'react-router-dom';
import { usersAPI } from '../../api/api';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component  {
  componentDidMount(){ 
    let userId = this.props.match.params.userId;
    if (!userId){

      userId = this.props.authorizedUserId;
      if (!userId){
        this.props.history.push("/login");
      }
    }
     this.props.getUserProfile(userId);
     this.props.getStatus(userId);
  }
  render() {
    return (
      <div className={classes.mainContent}>
        <Profile {...this.props} 
        profile={this.props.profile} 
        status={this.props.status} 
        updateStatus={this.props.updateStatus}/>
      </div>
    );
  }
}
//HOC
let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth, 
});

export default compose(
  connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
  withRouter,
  //withAuthRedirect
)(ProfileContainer); 