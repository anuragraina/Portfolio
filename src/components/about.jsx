import React from 'react';
import myImage from '../img/anurag.jpg';

class About extends React.Component {
	constructor() {
		super();
		this.state = {
			aboutMe: [
				{
					id: 'first-p-about',
					content: 'I am a Full Stack Developer.',
				},
				{
					id: 'second-p-about',
					content:
						'With over an year of experience developing web applications using the latest front-end and back-end technologies, I am currently undergoing training for Mobile App Developement using Flutter.',
				},
				{
					id: 'third-p-about',
					content:
						'Motivated developer with experience in developing custom web-apps specializing in MERN stack, I also have some experience working with Django among other tools and technologies.',
				},
			],
		};
	}

	render() {
		return (
			<section id='about' className='about-mf sect-pt4 route'>
				<div className='container'>
					<div className='row'>
						<div className='col-sm-12'>
							<div className='box-shadow-full'>
								<div className='row'>
									<div className='col-md-4 image-div'>
										<img
											src={myImage}
											className='img-fluid rounded b-shadow-a'
											alt='Profile'
										/>
									</div>
									<div className='col-md-8'>
										<div className='about-me pt-4 pt-md-0'>
											<div className='title-box-2'>
												<h5 className='title-left'>About Me</h5>
											</div>
											{this.state.aboutMe.map(content => (
												<p className='lead' key={content.id}>
													{content.content}
												</p>
											))}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default About;
