import React from "react";

const Profile = ({user}) => {

  console.log('PROFILE USER: ', user)

  return (
    <>
      {user ? (
        <div className="profile">
          <h2>{user.attributes?.email}</h2>
        </div>
      ) : (
        <h1>Profile</h1>
      )}
    </>
  )
}

export default Profile;