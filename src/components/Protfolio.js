import React from 'react'

const Protfolio = () => {
    return (
        <div>
             <div className='s1'>
            <div className='main-container'>
            <h3 style={{textAlign:'center'}}>Some of my Projects</h3>
            <div className='post-wrapper'>
            <div>
					<div className="post">
						<img className="thumbnail" src="images/Screenshot 2022-01-18 at 12.18.50 PM.png" />
						<div className="post-preview">
							<h6 className="post-title">Developer Connect Social Media App</h6>
							<p className="post-intro">Designed built & mantained a social media app built with MERN stack</p>
							<a href="https://dry-mountain-29166.herokuapp.com/" target="_blank">Live Version</a>
						</div>
					</div>
				</div>

				<div>
					<div className="post">
						<img className="thumbnail" src="images/Screenshot 2022-01-18 at 12.18.18 PM.png" />
						<div className="post-preview">
							<h6 className="post-title">SuperStore- Ecommerce App</h6>
							<p className="post-intro">Designed built and maintained an Online store built on MERN stack</p>
							<a href="https://superstoreappwastaken.herokuapp.com/" target="_blank">Live Version</a>
						</div>
					</div>
				</div>

				<div>
					<div className="post">
						<img className="thumbnail" src="images/Screenshot 2022-01-18 at 12.18.32 PM.png" />
						<div className="post-preview">
							<h6 className="post-title">Crypto Currency price Tracker</h6>
							<p className="post-intro">Designed and built a web app for tracking crypto price in real time using REACTjs</p>
							<a href="https://youthful-galileo-crypttotracker.netlify.app/" target="_blank">Live Version</a>
						</div>
					</div>
				</div>

			</div>


            </div>
            </div>
        </div>
        
    )
}

export default Protfolio
