import React from 'react';
import { useParams, Link } from "react-router-dom";
import { v4 as uuid_v4 } from "uuid";
import Carousel from 'react-bootstrap/Carousel'

export const Realestate = () => {
  const { id } = useParams()
  const [listing, setListing] = React.useState('') || {}

  React.useEffect(() => {
    getListing(`real_estates/${id}`)
    console.log('listing:', listing)
    console.log('listing.images_url: ',listing.images_url)
  }, [])

  const getListing = async (url) => {
    const config = {
      method: 'GET',
    };

    const response = await fetch(`${process.env.REACT_APP_API_URL}/${url}`, config);
    const data = await response.json();
    console.log(data)
    setListing(data)
  };


  return (<>
    {listing ? (
      <>
        <Carousel id="carouselRealEstate" className="carousel carousel-dark slide" data-bs-ride="carousel">
          {
            listing?.images_url?.map(item => (
              <Carousel.Item key={uuid_v4()}>
                <img src={`${process.env.REACT_APP_API_URL}${item}`} className="d-block w-100" alt=""/>
              </Carousel.Item>
            ))
          }
        </Carousel>
        <div className="container" style={{ padding: '0 3.5rem 3rem' }}>
          <h1>{listing.title}</h1>
          <p>Location: {listing.location}</p>
          <p>Price: <strong>{listing.price}</strong></p>
          <p>Address: {listing.address}</p>
          <p>{listing.description}</p>
          {<p>Owner: {listing?.user?.email}</p>}
          <Link to="/" className="btn btn-primary">Back</Link>
        </div>
      </>
    ) : (
      <h2>Loading...</h2>
    )}
  </>
  );
};

export default Realestate