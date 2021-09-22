
import React from 'react';
import Home from'./Component/Home/Home'
import NavMeenu from './Component/NavBar/NavMeenu'
import About from './Component/About/About'
import Contact from './Component/Contact/Contact'
import Hobby from './Component/Hobby/Hobby'
import Portfolio from './Component/Portfolio/Portfolio'
import ChatBot from './Component/ChatBot/ChatBot'
import './App.css'
import chatbot from './image/chatbot.png';

// <NavMeenu/>
//      <Home />
//      <About />
//       <Portfolio />
//       <Hobby />
//      <Contact />

 

export default class App extends React.Component {
	constructor(prop){

		super();
		this.state={
			isbotClicked:false
		}
	}

	 handleClick=()=>{
		this.setState({isbotClicked:!this.state.isbotClicked})
	}
	render(){
  return (

		    <div style={{overflow:'hidden'
		      
		      }}>

		      <NavMeenu/>
     <Home />
     <About />
      <Portfolio />
      <Hobby />
     <Contact />
		      


		      	

		  {this.state.isbotClicked ?
			  <div className="chatbox">
				  <div className='close' onClick={this.handleClick} ></div>
				  <ChatBot />


			  </div> :


			  <div className="chat-widget-avatar">
				  <img onClick={this.handleClick} style={{ width: '100%', height: '100%' }} src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/000000/external-robot-support-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png" />
			  </div>}
		 

		    </div>
		  );
}
}

