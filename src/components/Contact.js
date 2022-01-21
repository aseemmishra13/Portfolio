import React from 'react'

const Contact = () => {
    return (
        <div>
             <div className='s2'>
            <div className='main-container'>
            <a href=""></a>
			<h3 style={{textAlign: 'center'}}>Get In Touch</h3>

			<form id="contact-form" action="mailto:mishraaseem05@gmail.com" method="POST">
				<a name="contact"></a>

				<label>Name</label>
				<input className="input-field" type="text" name="name"/>

				<label>Subject</label>
				<input className="input-field" type="text" name="_subject"/>

				<label>Email</label>
				<input className="input-field" type="text" name="email"/>

				<label>Message</label>
				<textarea className="input-field" name="message"></textarea>
				{/* <input type="hidden" name="_next" value="https://aseemmishra13.github.io/Portfolio/"></input>
			
				<input type="hidden" name="_captcha" value="false"></input> */}

				<input id="submit-btn" type="submit" value="Send"/>
			</form>
            </div>
        </div>
        </div>
    )
}

export default Contact
