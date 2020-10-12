import React from 'react'
// import styles from './header.module.css'
const Header = () => {
    return (
    <header className="headerss">
        <h1>Qna Forum</h1>     
            <ul>
                <li className="activetab">Home</li>
                <li className="incativetab2">About</li>
                <li className="incativetab3">Contact us</li>
                <li className="incativetab4">Login</li>
            </ul>     
    </header>
    )
}

export default Header


