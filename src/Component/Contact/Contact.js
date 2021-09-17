import React from 'react';
import './Contact.css'

export default class Contact extends React.Component{

	render(){

		return (
			<section id="contact"
				className="contact-page">
				<div>
					<div className="contact-page-area">
						<div className="whole-contact">
							<div className="contact-page-item">
								<h2>Contacts</h2>
								<p>Currently I am working from home due to COVID-19 but my work location is Banglore</p>
								<div className="adress">
									<h3>Address</h3>
									<span>Vill-Parsa khal, Post- Saltauwa, District- Basti, State- UP, India, 272190</span>
								</div>
								<div className="phone">
									<h3>Phone</h3>
									<span>7976929675</span>
									<span>9549070339</span>
								</div>
								<div className="email">
									<h3>Email</h3>
									<span>maheshpandey9919@gmail.com</span>
								</div>
							</div>
						</div>
						
					</div>
					
				</div>
			</section>
			);
	}
}