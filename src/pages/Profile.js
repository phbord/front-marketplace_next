import Cookies from "js-cookie";
import React from "react";

const Profile = ({ user }) => {

  console.log('PROFILE USER: ', user)

  const [listing, setListing] = React.useState('') || []

  React.useEffect(() => {
    getListing(`api/users/${Cookies.get('id')}/real_estates`)
    console.log('listing:', listing)
  }, [])

  const getListing = async (url) => {
    const config = {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${Cookies.get('token')}`
      }
    };

    const response = await fetch(`${process.env.REACT_APP_API_URL}/${url}`, config);
    const data = await response.json();
    console.log('from get: ', data)
    setListing(data)
  };

  return (
    <>
      {user ? (
        <div className="container my-4">
          <h1>My Profile</h1>
          <h3>{user.attributes?.email}</h3>
          <h3>My Listings</h3>
          <hr/>
          {listing ? (
            listing.map(l => (
              <div className="listing-profile" key={l.id}>
                <h4>{l.title}</h4>
                <h4>{l.description}</h4>
                <h4>{l.address}</h4>
                <h4>{l.location}</h4>
                <ul className="photos">
                {l.images_url.map((image, index) => (
                  <li key={index}>
                    <img src={`${process.env.REACT_APP_API_URL}${image}`} />
                  </li>
                ))}
                </ul>
                <hr/>
              </div>
            ))
          ) : (
            <h2>Loading...</h2>
          )}
        </div>
      ) : (
        <h1>Profile</h1>
      )}
    </>
  )
}

export default Profile;