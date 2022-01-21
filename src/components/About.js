import React from 'react'

const About = () => {
    return (
        <div>
             <div className='s2'>
            <div className='main-container'>
            <div className='about-wrapper'>
                <h4>More about me</h4>
                <p>I build new projects just to tickle my brain</p>

					<p>I have been trained and employed by Infosys since Jan 2020</p>


					<hr></hr>
                    <h4>TOP EXPERTISE</h4>

					<p>Fullstack developer with primary focus on MERN Stack <br/> <a target="_blank" href="resume.pdf">Download Resume</a></p>

					<div id="skills">
						<ul>
							<li>React</li>
							<li>Express</li>
							<li>JavaScript</li>
							<li>Redux</li>
							<li>Mongo DB</li>
						</ul>

						<ul>
							<li>HTML</li>
							<li>CSS</li>
							<li>Bootstrap</li>
							<li>Python</li>
							<li>MySQL</li>
						</ul>

					</div>

            </div>
            <div className='social-links'>

            </div>
            </div>
        </div>
        </div>
    )
}

export default About
