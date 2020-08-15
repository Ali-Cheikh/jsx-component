import React from 'react'
import ProfilePhoto from './profile/ProfilPhoto'
import Address from './profile/Address'
import FullName from './profile/FullName'

function Main() {
    return(
        <div>
          <ProfilePhoto />
          <Address />
          <FullName />
        </div>
    );
}
export default Main;