import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'
import { Layout, Card } from 'antd';
import { v4 as uuid_v4 } from "uuid";
import { getListing } from 'Utils/fetchFunctions';

const cookie = Cookies.get('token');

export const Home = () => {
	const [flats, setFlats] = React.useState([]);

	React.useEffect(() => {
		setFlats(getListing('real_estates'))
		console.log(flats)
	}, [])

	return (
		<>
			<div className="home-header">
				<div className="bg-img-desc">
					<h1>List of real estates</h1>
				</div>
			</div>
			<Content style={{ padding: '0 3.5rem' }}>
				<Row gutter={16}>
					{flats ? ( flats.map(flat => (
						<Col span={{xs: 24, sm: 12, md: 8, lg: 6}} key={uuid_v4()}>
							<Link to={`/real_estates/${flat.id}`} className="card-link">
								<Card hoverable
											style={{ border:"1px solid black" }}
											title={flat.title}
											cover={<img alt="example" src={flat.id} />}>
									<p>Price : {flat.price} €</p>
									<p>location : {flat.location}</p>
								</Card>
							</Link>
						</Col>
					))
					):(
						<h2>Loading...</h2>
					)}
				</Row>
			</Content>
		</>)
}
