import React from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { Carousel, Image } from 'antd';

import { findOneRealestates, findOneCategories } from '../redux/realestates/realestatesActions'

export const Realestate = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
	const flat = useSelector(state => state.realestates.realestate) || {}
  const [fetchOnce, setFetchOnce] = React.useState(false);
	
	React.useEffect(() => {
    if (!fetchOnce) {
      dispatch(findOneRealestates(`real_estates/${id}`))
      setFetchOnce(true)
    }
	}, [fetchOnce, dispatch, flat])

  return (<>
    {flat ? (
      <>
        <Carousel autoplay style={{ padding: '4rem 0 3rem' }}>
          <div className="realestate-carousel">
            <div>
              <Image className="realestate-carousel-image" 
                      preview={{ visible: false }}
                      src="https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
            </div>
          </div>
          <div className="realestate-carousel">
            <div>
              <Image className="realestate-carousel-image" 
                      preview={{ visible: false }}
                      src="https://images.pexels.com/photos/1059078/pexels-photo-1059078.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
            </div>
          </div>
        </Carousel>
        <div className="container mb-4">
          <h1>{flat.title}</h1>
          <p>Location: {flat.location}</p>
          <p>Price: <strong>{flat.price}</strong></p>
          <p>Address: {flat.address}</p>
          <p>{flat.description}</p>
          { <p>Owner: {flat?.user?.email}</p> }
        </Content>
      </>
    ) : (
      <>
        loading
      </>
    )}
  </>
  );
};

export default Realestate