import React from 'react'
import { Layout } from "antd";
import "antd/dist/antd.css";

const { Content } = Layout;

export const Home = () => {
	const realEstates = [
		{}
	]

	return (<>
		<div className="home-header d-flex justify-content-center align-items-center">
			<div>
				<h1>List of real estate</h1>
			</div>
		</div>
		<div className="container">
			<ul className="row">
				<li className="col-12 col-sm-6 col-md-4">
					<div className="card mb-3">
						<img src="" alt="" className="car-img-top" />
						<div className="card-bodu">
							<h5 className="card-title"></h5>
							<p className="card-text"></p>
							<a href="" className="btn primary">Details</a>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</>)
}
