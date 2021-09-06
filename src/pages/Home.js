import React from 'react'
import { useDispatch } from 'react-redux'
import { Layout } from 'antd';
import { Card, Col, Row } from 'antd';
import { v4 as uuid_v4 } from "uuid";

import { findRealestates } from '../redux/realestates/realestatesActions'
import data from '../data/dumbdata.json';

const { Content } = Layout;

export const Home = () => {
	const { flats } = data
	const { Meta } = Card;
  const dispatch = useDispatch()

	return (
		<div>
			<Row gutter={16}>
				{flats.map(flat => (
					<>
					<Col span={{xs: 24, sm: 12, md: 8, lg: 6}}>
						<Card
							key={uuid_v4()}
							hoverable
							style={{ border:"1px solid black" }}
							cover={<img alt="example" src={flat.images[0]} />}>
							<Meta title={flat.name}  />
						</Card>
					</Col>
					</>
				))}
			</Row>
		</div>)
}
