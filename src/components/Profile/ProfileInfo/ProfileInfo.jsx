import React from 'react';
import c from './ProfileInfo.module.css';
import Preloader from '../../Common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';


const ProfileInfo = ({profile, status, updateStatus}) => {
if(!profile){
  return <Preloader/> 
}

  return (
    <div className={c.cont}>
      <img src="https://www.canon.ua/media/PCA%20Exercise%20-%20Landscape%20Photography%20exercise-landscape-photos-opener-05_1200%20x%20400_tcm212-1444470.jpg"></img>
      <div className={c.descrB}>
        <img src={profile.photos.large} className={c.profilePhoto}/>
        <h1>{profile.fullName}</h1>
        <p>{profile.aboutMe}</p>
        
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />

      </div>

    </div>
  );
}

export default ProfileInfo;