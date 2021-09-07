import React from 'react';
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { Carousel, Layout, Image, Space, Col, Row } from 'antd';
import { bottom } from '@popperjs/core';

import { findOneRealestate } from '../redux/realestate/realestateActions'

const { Content } = Layout;

const Realestate = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
	const flat = useSelector(state => state.realestate.realestate)
	
	React.useEffect(() => {
		dispatch(findOneRealestate(`real_estates/${id}`))
	}, [])

const Realestate = () => {
  return (<>
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
          <div className="bg-img-desc">
            <h1>Carousel</h1>
          </div>
        </div>
      </div>
    </Carousel>
    <Content style={{ padding: '0 3.5rem 3rem' }}>
      <h1>Content</h1>
    </Content>
  </>);
};

export default Realestate;