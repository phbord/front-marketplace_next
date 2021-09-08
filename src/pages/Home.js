import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'
import { Layout, Card } from 'antd';
import { v4 as uuid_v4 } from "uuid";
import Cookies from "js-cookie";

const cookie = Cookies.get('token');

export const Home = ({flats}) => {
	const { Meta } = Card;
	const connected = useSelector(state => state.auth.user)

	return (
		<>
			<div className="home-header">
				<div className="bg-img-desc">
					<h1>List of real estates</h1>
				</div>
			</div>
			<div className="container">
				<ul className="row">
					{flats && flats.map(flat => (
						<li className="col-12 col-sm_6 col-md-4 col-lg-3 mb-3" key={uuid_v4()}>
							<Card className="card h-100">
								{/* <img src="" className="card-img-top" alt=""/> */}
								<div className="card-body">
									<h5 className="card-title">{flat.price} €</h5>
									<p className="card-text">location : {flat.location}</p>
									{ connected && <Link to={`/real_estates/${flat.id}`} className="btn btn-primary">Details</Link> }
								</div>
							</Card>
						</li>
					))}
				</ul>
			</div>
		</>)
}
