import React from 'react';

import './ChatBot.css';

export default class ChatBot extends React.Component {

	constructor(props) {
		super();

		this.state = {
			payload: [],
			value: "",
			isTyping:true

		}
	}

	onValueChange=(e)=>{
		e.preventDefault();
		this.setState({value:e.target.value})

	}
	handleClick=(e)=>{
		e.preventDefault();
		
		const { payload, value, isTyping } = this.state;
			const obj = {};
			obj["msg"] = value
			payload.push(obj);
			
			this.setState({ payload: payload ,isTyping:true});
			this.callAgent(value, obj);
		
			this.setState({ value: "" });

		


		
	}
	callAgent(value, obj) {

		var raw = JSON.stringify({ "msg": value });
		//console.log(raw);
		const { payload, isTyping } = this.state

		var requestOptions = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: raw

		};
		const url = "https://portfolio-chatbot-response.herokuapp.com/sendQuery";

		fetch(url,requestOptions)
			.then(response => (response.json()))
			.then(result => {
				obj["reply"] = result.reply
				payload.push(obj)
				console.log(payload)
				this.setState({ payload: payload, isTyping :false})

			}).catch(error => {
				
				obj["reply"] = "Agent is down now"
				payload.push(obj)
				this.setState({ payload: payload, isTyping: false })
			});
			



	}

	scrollToBottom = () => {
		this.messagesEnd.scrollIntoView({ behavior: "smooth" });
	}

	componentDidMount() {
		this.scrollToBottom();
	}

	componentDidUpdate() {
		this.scrollToBottom();
	}


	render() {
		const{payload}= this.state;
		const Typing = () => (
			<div className="typing">
				<div className="typing__dot"></div>
				<div className="typing__dot"></div>
				<div className="typing__dot"></div>
			</div>
		)



		const message = this.state.payload.map((entry, index, arr) => (
			index%2==0?
			<div key={index} >
					<div key={entry.msg} className='user'> {entry.msg}</div>
				<div key={entry.reply} className='dummy'>{(this.state.isTyping && arr.length - 1 == index) ? <Typing /> : entry.reply }
				</div>
			</div >:null
		));

		

		return (
			<>
				<div className='ui' >
					<h2>Try Me! </h2>

					{message}

					<div style={{ float: "left", clear: "both" }}
						ref={(el) => { this.messagesEnd = el; }}>
					</div>
				</div>

				<div className='sendSection'>	
					<input className='inputDetail' type="text" value={this.state.value} onChange={this.onValueChange} placeholder="Type" />
						<button onClick={this.handleClick} className="bttn" >Send</button>

				</div>
								

			</>


			);
	}
}