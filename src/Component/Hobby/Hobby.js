import React from 'react';

import './Hobby.css';
import shimla from '../../image/shimla.jpeg';
import lko from '../../image/lucknow.JPG';
import jaipur from '../../image/jaipur.jpeg';
import savandurga from '../../image/savandurga.jpeg';
import makalidurgatrek from '../../image/makalidurgatrek.jpeg';
import nandihills from '../../image/nandihills.jpeg';
import savan2 from '../../image/savan2.jpeg';
import savan3 from '../../image/savan3.jpeg';

export default class Hobby extends React.Component{

	render(){

		return (
			<section id="hobby"
				className="hobby-section section-padding">
				<div className="container">
					<div >
						<div className="section-title section-title2 text-center">
							<span>My Hobby</span>
							<h2>Travelling</h2>
						</div>
					</div>
					<div>
					<div className="image-row">
						<div className="card">

								<img src={shimla} alt="Avatar" style={{ width: '100%', height: '100%' }}  />

						</div>


						<div className="card">
								
								<img src={jaipur} alt="Avatar" style={{ width: '100%', height: '100%' }} />
						</div>

						<div className="card">
								<img src={makalidurgatrek} alt="Avatar" style={{ width: '100%', height: '100%' }} />
							
						</div>

					</div>
					</div>
					<div>

						<div className="image-row">
							<div className="card">
								<img src={savan2} alt="Avatar" style={{ width: '100%', height: '100%' }} />
							</div>

							<div className="card">
								<img src={nandihills} alt="Avatar" style={{ width: '100%', height: '100%' }} />

							</div>

							<div className="card">
								<img src={savan3} alt="Avatar" style={{ width: '100%', height: '100%' }} />

							</div>

						</div>

					</div>

				</div>
			</section>
			);
	}
}
