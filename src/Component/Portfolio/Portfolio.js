import React from 'react';

import './Portfolio.css';

export default class Hobby extends React.Component{
	constructor(props){

		super();
		this.state={

			expand:false,
			expand2: false,
			expand3: false,
			expand4: false
		}
	}

	render(){

		return (
			<section id="portfolio"
				className="portfolio-section portfolio-padding">
				<div className="container">
					<div >
						<div className="section-title  text-center">
							<h2>Portfolio</h2>
						</div>
					</div>
					<div className="detail-section">

						<div className="education-section">
							<div className="education-detail">

								<h4>Arya Institute of education and technologies Jaipur, Rajasthan</h4>
								<h5>2015-2019</h5>
								<span>I completed my graduation from computer science branch with 74%
									aggregate</span>
							</div>
							<div className="education-detail">
								<h4>St. Xavier’s High School Pared Sarkar Gonda, UP</h4>
								<h5>2013-2014</h5>
								<span>I completed my 12th with 83%.</span>

							</div>
							<div className="education-detail">
							<h4>Skills</h4>
								<ul>
									<li><b>Primary Skill:</b> ReactJS, JavaScrip</li>
									<li><b>Secondary Skills:</b> NodeJs, Java, C, C++, Sql.</li>
									<li><b>Frameworks:</b> React, Flask, Dialogflow, and Flutter</li>
									<li><b>DevOps Tools:</b> Docker, Azure</li>
									<li><b>Web development:</b>  ReactJs, Html, CSS, Rest API.</li>
									<li><b>Database:</b> MySQL, PostgreSQL.</li>
									<li><b>IDEs and SDKs:</b> Visual Studio, Jupyter Notebook, Android Studio,
										eclipse.</li>
									<li><b>Others:</b>  PowerBI, RPA,php, Git</li>

								</ul>


							</div>

						</div>

						<div className="work-experience">
							<div className="work-detail">
								<h1>TATA CONSULTANCY AND SERVICES</h1>
								<h3>Developer, Retail UK,Bangaluru</h3>
								<h4>2019(Jul)-Present</h4>
								<h5 onClick={(e)=>this.setState({expand:!this.state.expand})}> Dashboard for real time store management</h5>
								{this.state.expand?
									<ul>
										<li>Mysql for data base uses where data stored related to store.</li>
										<li>ReactJs to create front end website where user can monitor stock on
											hand on real time and create replenishment or transfer if required. It
											has ability of data visualization as well at the real time.
										</li>
										<li>ReactJs to create front end website where user can monitor stock on
											hand on real time and create replenishment or transfer if required. It
											has ability of data visualization as well at the real time.
										</li>
										<li> Used docker to containerize the webapp and used Git for version
											contro</li>


									</ul>:null
								}

								<h5 onClick={(e) => this.setState({ expand2: !this.state.expand2 })}> Dashboard for visualize the failure in Retail System(RMS,RIB,SIM)</h5>
								{this.state.expand2 ?

								<ul>
										<li>Created java client batch to load the file into the database server</li>
										<li>Created java client batch to load the file into the database server
									</li>
										<li>ReactJs for front end web to visualize the issue
									</li>
										<li> ReactJs for front end web to visualize the issue</li>


									</ul> : null
								}


								<h5 onClick={(e) => this.setState({ expand3: !this.state.expand3 })}> Development of Chatbot for Retail Domain|| Node.Js, DialogFlow</h5>
								{this.state.expand3 ?
								<ul>
									<li>ReactJs for front end web to visualize the issue</li>
										<li>Using Node.js for Development on Dialogflow.
									</li>
										<li>Using Node.js for Development on Dialogflow
									</li>
										<li> Using Node.js for Development on Dialogflow</li>


									</ul> : null
								}

								<h5 onClick={(e) => this.setState({ expand4: !this.state.expand4 })}> Development and deployment for Vodafone Retail Uk</h5>
								{this.state.expand4 ?
								<ul>
										<li>Developed multiple java client script for sim store to warehouse
											transfer in retail.</li>
										<li>eveloped multiple java client script for sim store to warehouse
											transfer in retail.
									</li>
										<li>Worked on java automation testing created test suit for automation
											testing of soap services and other scripts..
									</li>
										<li> Worked upon CI/CD pipeline of azure for deployments where we
											used GIT for version control</li>
										<li>Have been part of business go live and several releases </li>
										<li>Worked on BI Publisher to create reports and Used ADF to link these
											reports to RMS Application
										</li>


									</ul> : null
								}

							</div>
					

					</div>
				</div>
			</div>
					

				
			</section>
			);
	}
}
