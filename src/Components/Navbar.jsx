import React from 'react'

const Navbar = ({ active }) => {
    return (
        <nav className={active === 'open-page' ? 'active' : ''}>
            <ul>
                <li><a href="#Agent" className={active === 'Agent' ? 'active' : ''}>AGENT</a></li>
                <li><a href="#W-Engine" className={active === 'W-Engine' ? 'active' : ''}>W-ENGINE</a></li>
                <li><a href="#Disc" className={active === 'Disc' ? 'active' : ''}>DISC</a></li>
                <li><a href="#Enemy" className={active === 'Enemy' ? 'active' : ''}>ENEMY</a></li>
            </ul>
        </nav>
    )
}

export default Navbar