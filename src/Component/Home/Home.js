import React from 'react';
import './Home.css'
import myimage from '../../image/profiletrans.png';

export default class Home extends React.Component{

	render(){
		return (
			<section className='home-nav'>
				<img src="../../home.jpg" className='slider' />
				
				<img src={myimage} className='my-image' />				
				<div className="slide-subtitle"><h4>I Am Mahesh Pandey</h4></div>
				<div className="slide-title"><h2>ReactJs Developer</h2></div>
				
			</section>

			);
	}
}