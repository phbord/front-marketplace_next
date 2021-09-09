import Cookies from "js-cookie";
import React from "react";
import { Link } from "react-router-dom";
import { v4 as uuid_v4 } from "uuid";

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
          <h5>{user.attributes?.email}</h5>
          <ul className="row">
            {listing ? (
              listing.map(l => (
                <li className="col-12 col-sm-6 col-md-4 col-lg-3 mt-4" key={uuid_v4()}>
                  {/* CARD */}
                  <div className="listing-profile card h-100">
                    {/* PHOTO */}
                    <ul className="photos">
                      {l.images_url.map((image, index) => (
                        <li key={index}>
                          <img src={`${process.env.REACT_APP_API_URL}${image}`} 
                                alt="" 
                                className="card-img-top"/>
                        </li>
                      ))}
                    </ul>
                    {/* CONTENT */}
                    <div className="card-body">
                      <p>{l.title}</p>
                      <p>{l.description}</p>
                      <p>{l.address}</p>
                      <p>{l.location}</p>
                      <Link to={`/update_real_estate/${l.id}`} 
                            className="btn btn-primary">Update</Link>
                    </div>
                  </div>
                  {/* CARD : end */}
                </li>
              ))
            ) : (
              <h2>Loading...</h2>
            )}
          </ul>
        </div>
      ) : (
        <h1>Profile</h1>
      )}
    </>
  )
}

export default Profile;