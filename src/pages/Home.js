import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { v4 as uuid_v4 } from "uuid";

export const Home = () => {
	const connected = useSelector(state => state.auth.user)
	const [flats, setFlats] = React.useState([]);

	React.useEffect(() => {
		getListing('real_estates')
	}, [])

	const getListing = async (url) => {
		const config = {
			method: 'GET',
		};

		const response = await fetch(`${process.env.REACT_APP_API_URL}/${url}`, config);
		const data = await response.json();
		
		setFlats(data)
	};

	return (
		<>
			<div className="home-header">
				<div className="bg-img-desc">
					<h1>List of real estates</h1>
				</div>
			</div>
			<div className="container" style={{ padding: '0 3.5rem' }}>
				<ul className="row">
					{flats ? (
						flats.map(flat => (
							<li className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={uuid_v4()}>
								<div className="card h-100">
									{ flat.images_url && <img src={`${process.env.REACT_APP_API_URL}${flat.images_url[0]}`} className="card-img-top" alt=""/> }
									<div className="card-body">
										<h5>{flat.title}</h5>
										<p>Price : {flat.price} €</p>
										<p>location : {flat.location}</p>
										{connected && <Link to={`/real_estates/${flat.id}`} className="btn btn-primary">Details</Link>}
									</div>
								</div>
							</li>
						))
					) : (
						<h2>Loading...</h2>
					)}
				</ul>
			</div>
		</>)
}
