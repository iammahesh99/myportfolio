import React from 'react'
import './NavMeenu.css'
import linkedIn from '../../image/link.svg';

export default class NavMeenu extends React.Component{

//<label for="toggle">&#9776;</label>
constructor(prop){
	super();
	this.state={
		clicked: false
	}
}
handleClick=()=>{
	this.setState({ clicked: !this.state.clicked });
	console.log(this.state.clicked);
}

nav(){

	return (
		<div className="navbar">
		<ul className="ul">
				<li><a href="#" style={{ textDecoration: 'none', color: 'white' }}>Home</a></li>
				<li><a href="#about" style={{ textDecoration: 'none', color: 'white' }}>About</a></li>
				<li><a href="#Portfolio" style={{ textDecoration: 'none', color: 'white' }}>Portfolio</a></li>
				<li><a href="#hobby" style={{ textDecoration: 'none', color: 'white' }}>Hobby</a></li>
				<li><a href="#contact" style={{ textDecoration: 'none', color: 'white' }}>Contact</a></li>

		</ul>
		</div>
		);
}
	render(){
		return (
			<section className='completebar'>
					<div className='menu-bar'>
						<label onClick={this.handleClick}>&#9776;</label>
						<span><a href="#" style={{textDecoration:'none',color:'white'}}>Home</a></span>
						<span><a href="#about" style={{textDecoration: 'none', color: 'white '}}>About</a></span>
						<span><a href="#portfolio" style={{ textDecoration: 'none', color: 'white' }}>Portfolio</a></span>
						<span><a href="#hobby" style={{ textDecoration: 'none', color: 'white' }}>Hobby</a></span>
						<span><a href="#contact" style={{ textDecoration: 'none' ,color:'white' }}>Contact</a></span>
					</div>
					<div className='socialMedia'>
					
					<span ><a href="https://www.linkedin.com/in/mahesh-pandey-6146bb119" target="_blank"><img src="https://img.icons8.com/color/48/000000/linkedin.png" /></a></span>
					<span><a href="https://www.instagram.com/iammahesh99/" target="_blank"><img src="https://img.icons8.com/color/48/000000/instagram-new.png" /></a></span>
					
						
					</div>

					{this.state.clicked?this.nav():null}

					
			</section>

			);
	}
}