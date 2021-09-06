import React from 'react'
import data from '../data/dumbdata.json'
import { Card } from 'antd';
import { v4 as uuid_v4 } from "uuid";
export const Home = () => {

	const { flats } = data
	const { Meta } = Card;
	return (
		<div>
			home

			{flats.map(flat => (
				<Card
				style={{border:"1px solid black"}}
					id={uuid_v4()}
					hoverable
					style={{ width: 240 }}
					cover={<img alt="example" src={flat.images[0]} />}
				>
					<Meta title={flat.name}  />
				</Card>
			))}
		</div>
	)
}
