import React from 'react';
import './About.css';
import myimage from '../../image/profiletrans.png';
import CV from '../../image/CV.pdf';
export default class About extends React.Component{
	

	render(){

		return (
			<section className="hx-about-style-1"
				id="about">
				<div className="container">
					<div className="about">
						<div className="content">
							<div className="hx-about-content">
								<div className="hx-site-title">
									<span>ReactJs Developer &amp; Designer</span>
									<h2>About Me</h2>
								</div>
								<p>System Engineer with
									2+ years of work experience .I
									enjoy coding, testing, and
									integration. Seeking a new
									challenges and opportunities
									to leverage.The passion carried me through my education and it was here that I learned that truly how much there was to learn.So now in industry, this passion remains with me. There's certainly yet more to learn, yet more problem to solve and yet more to build. And for this I am very grateful.</p>
								<p>My specialties include quickly learning new skills and programming languages, problem solving and responsive design principles. so I have java, NLP, ReactJs,HTML,CSS,Python, Android,Docker, Node.Js , flask, Github, Heroku and Power BI for data visualization under my belt. I have started learning Machine Learning and MuleSoft. I am still enthusiastically grabbing on to other programming languages, framework or principle that I can integrate into coding web in my head</p>
								<div className="btns">
									<a 
									href={CV}
									target="_blank"
									className="theme-btn"
									>Open CV</a>
								</div>
							</div>
						</div>
						<div className="image">
							<div className="hx-about-img">
								<img src={myimage} />
								</div>
						</div>
					</div>
				</div>
			</section>

			);
	}
}