import React from 'react'

const Navbar = () => {
    return (
        <div className='intro-wrapper'>
            <div className='nav-wrapper'>
                <div className='dots-wrapper'>
                    <div id='dot1' className='browser-dot'></div>
                    <div id='dot2' className='browser-dot'></div>
                    <div id='dot3' className='browser-dot'></div>
                </div>
                <ul id='navigation'>
                    <li><a href='#'>Contact</a></li>
                    
                </ul>
            </div>
            <div className='left-column'>
                <img src='images/Aseem.png' alt='profile' id = 'profile_pic'/>
                <h5 style = {{textAlign:'center',lineHeight:0}}>Personalize Theme</h5>
                <div id='theme-option-wrapper'>
                    <div data-mode='light' className='theme-dot' id='light-mode'></div>
                    <div data-mode='blue' className='theme-dot' id='blue-mode'></div>
                    <div data-mode='green' className='theme-dot' id='green-mode'></div>
                    <div data-mode='purple' className='theme-dot' id='purple-mode'></div>

                </div>
                < p id='setting-note'>*Theme will be saved for<br></br> your next visit</p>
            </div>
            <div className='right-column'>
                <div id='preview-shadow'>
                <div id='preview'>
                    <h3>What I do</h3>
                    <p>
                        I am professional full stack web developer
                    </p>
                </div>
                </div>
            </div>
            
        </div>
    )
}

export default Navbar
