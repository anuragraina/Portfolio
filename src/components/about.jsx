import React from 'react';
import myImage from '../img/anurag.jpg';

class About extends React.Component {
	constructor() {
		super();
		this.state = {
			skills: [
				{ id: 'HTML5_skill', content: 'HTML5', porcentage: '80%', value: '80' },
				{ id: 'CSS3_skill', content: 'CSS3', porcentage: '75%', value: '75' },
				{ id: 'JavaScript_skill', content: 'JavaScript', porcentage: '90%', value: '90' },
				{ id: 'PHP_skill', content: 'PHP', porcentage: '70%', value: '70' },
				{ id: 'ReactJS_skill', content: 'ReactJS', porcentage: '80%', value: '80' },
				{ id: 'Python_skill', content: 'Python', porcentage: '75%', value: '75' },
				{ id: 'VanillaJS_skill', content: 'VanillaJS', porcentage: '85%', value: '85' },
				{ id: 'Wordpress_skill', content: 'Wordpress', porcentage: '80%', value: '80' },
			],
			about_me: [
				{
					id: 'first-p-about',
					content: 'I am a Computer Science undergrad graduating in 2021.',
				},
				{
					id: 'second-p-about',
					content:
						'With over two years of experience developing web applications using the latest front-end and back-end technologies.',
				},
				{
					id: 'third-p-about',
					content:
						'Motivated designer and developer with experience creating custom websites with ReactJs, JavaScript, HTML5, and CSS3. Strong collaboration skills and proven history of application development. Wordpress and MySQL.',
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
											{this.state.about_me.map(content => {
												return (
													<p className='lead' key={content.id}>
														{content.content}
													</p>
												);
											})}
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
