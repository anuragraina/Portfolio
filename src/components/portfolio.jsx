import React from 'react';

import projects from './projects';
import ProjectCard from './ProjectCard';

class Portfolio extends React.Component {
	render() {
		return (
			<section id='work' className='portfolio-mf sect-pt4 route'>
				<div className='container'>
					<div className='row'>
						<div className='col-sm-12'>
							<div className='title-box text-center'>
								<h3 className='title-a'>Portfolio</h3>
								<p className='subtitle-a'>Check Out My Latest Projects.</p>
								<div className='line-mf'></div>
							</div>
						</div>
					</div>

					<div className='row'>
						{projects.map(project => (
							<ProjectCard project={project} key={project.name} />
						))}
					</div>
				</div>
			</section>
		);
	}
}

export default Portfolio;
