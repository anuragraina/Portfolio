import React from 'react';

import Chatbook1 from '../img/chatbook1.jpg';
import Chatbook2 from '../img/chatbook2.jpg';
import Chatbook3 from '../img/chatbook3.jpg';

export default function ProjectCard(props) {
	const { project } = props;
	return (
		<>
			<div className='col-md-4'>
				<div className='work-box card' data-toggle='modal' data-target={'#' + project.name}>
					<div className='work-img'>
						<img className='card-img-top h-100' src={project.images[0]} alt={project.name} />
					</div>
					<div className='card-body'>
						<h5 className='card-title'>{project.title}</h5>
						<p className='card-text'>{project.description[0]}</p>
					</div>
				</div>
			</div>

			{/* -- Modal -- */}
			<div
				className='modal fade'
				id={project.name}
				tabIndex='-1'
				role='dialog'
				aria-labelledby={project.name}
				aria-hidden='true'
			>
				<div className='modal-dialog modal-dialog-centered modal-lg' role='document'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h5 className='modal-title' id={project.name}>
								{project.title}
							</h5>
							<button type='button' className='close' data-dismiss='modal' aria-label='Close'>
								<span aria-hidden='true'>&times;</span>
							</button>
						</div>

						<div className='modal-body'>
							{project.images.length > 1 ? (
								<div id='chatbookCarousel' className='carousel slide' data-ride='carousel'>
									<ol className='carousel-indicators'>
										<li data-target='#chatbookCarousel' data-slide-to='0' className='active' />
										<li data-target='#chatbookCarousel' data-slide-to='1' />
										<li data-target='#chatbookCarousel' data-slide-to='2' />
									</ol>
									<div className='carousel-inner'>
										<div className='carousel-item active'>
											<img className='d-block w-100' src={Chatbook1} alt='First slide' />
										</div>
										<div className='carousel-item'>
											<img className='d-block w-100' src={Chatbook2} alt='Second slide' />
										</div>
										<div className='carousel-item'>
											<img className='d-block w-100' src={Chatbook3} alt='Third slide' />
										</div>
									</div>
									<a
										className='carousel-control-prev'
										href='#chatbookCarousel'
										role='button'
										data-slide='prev'
									>
										<span className='carousel-control-prev-icon' aria-hidden='true'></span>
										<span className='sr-only'>Previous</span>
									</a>
									<a
										className='carousel-control-next'
										href='#chatbookCarousel'
										role='button'
										data-slide='next'
									>
										<span className='carousel-control-next-icon' aria-hidden='true'></span>
										<span className='sr-only'>Next</span>
									</a>
								</div>
							) : (
								<img src={project.images[0]} alt={project.name} className='w-100' />
							)}

							<ul className='project-details'>
								{project.description.map((item, i) => (
									<li key={i}>{item}</li>
								))}
							</ul>
						</div>
						<div className='modal-footer'>
							<div>
								<i className='fa fa-link'></i>
								{project.ongoing ? (
									<span className='link'>{project.link}</span>
								) : (
									<a href={project.link} target='_blank' rel='noopener noreferrer' className='link'>
										{project.link}
									</a>
								)}
							</div>

							{project.githubLink && (
								<div>
									<i className='ion-social-github' />
									<a
										href={project.githubLink}
										target='_blank'
										rel='noopener noreferrer'
										className='link'
									>
										{project.githubLink}
									</a>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
