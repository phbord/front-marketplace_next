import React from 'react'
import { Layout } from 'antd';
import { Card, Col, Row } from 'antd';
import { v4 as uuid_v4 } from "uuid";

import data from '../data/dumbdata.json';

const { Content } = Layout;

export const Home = () => {

	const { flats } = data
	const { Meta } = Card;
	return (
		<>
			<div className="home-header">
				<h1>List of real estate</h1>
			</div>
			<Content style={{ padding: '0 50px' }}>
				<Row gutter={16}>
					{flats.map(flat => (
						<Col key={uuid_v4()} span={{xs: 24, sm: 12, md: 8, lg: 6}}>
							<Card
								hoverable
								style={{ border:"1px solid black" }}
								cover={<img alt="example" src={flat.images[0]} />}>
								<Meta title={flat.name}  />
							</Card>
						</Col>
					))}
				</Row>
			</Content>
		</>)
}
