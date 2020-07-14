import React from 'react';
import c from './ProfileInfo.module.css';


const ProfileInfo = () => {
  return (
    <div className={c.cont}>
      <img src="https://www.canon.ua/media/PCA%20Exercise%20-%20Landscape%20Photography%20exercise-landscape-photos-opener-05_1200%20x%20400_tcm212-1444470.jpg"></img>
      <div className={c.descrB}>
        <h1>Alex Koroban</h1>
      </div>

    </div>
  );
}

export default ProfileInfo;