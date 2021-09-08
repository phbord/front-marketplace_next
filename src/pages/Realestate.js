import React from 'react';
import { useParams } from "react-router-dom";
import { Carousel, Image } from 'antd';

export const Realestate = () => {
  const { id } = useParams()
  const [listing, setListing] = React.useState('') || {}

  React.useEffect(() => {
    getListing(`real_estates/${id}`)
    console.log('listing:', listing)
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
        <Carousel autoplay style={{ padding: '4rem 0 3rem' }}>
          <div className="realestate-carousel">
            <div>
              <Image className="realestate-carousel-image"
                preview={{ visible: false }}
                src={`${process.env.REACT_APP_API_URL}${listing.images_url[0]}` || "https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"} />
            </div>
          </div>
          <div className="realestate-carousel">
            <div>
              <Image className="realestate-carousel-image"
                preview={{ visible: false }}
                src={`${process.env.REACT_APP_API_URL}${listing.images_url[1]}` || "https://images.pexels.com/photos/1059078/pexels-photo-1059078.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"} />
            </div>
          </div>
        </Carousel>
        <div className="container" style={{ padding: '0 3.5rem 3rem' }}>
          <h1>{listing.title}</h1>
          <p>Location: {listing.location}</p>
          <p>Price: <strong>{listing.price}</strong></p>
          <p>Address: {listing.address}</p>
          <p>{listing.description}</p>
          {<p>Owner: {listing?.user?.email}</p>}
        </div>
      </>
    ) : (
      <h2>Loading...</h2>
    )}
  </>
  );
};

export default Realestate