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
                    <li><a href='#'>Contact</a></li>
                </ul>
            </div>
            <div className='left-column'>
                left column
            </div>
            <div className='right-column'>
                right column
            </div>
            
        </div>
    )
}

export default Navbar
