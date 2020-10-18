import React,{useContext} from 'react'
import {useHistory,Link} from 'react-router-dom'
import UserContext from '../../data/UserContext'
// import styles from './header.module.css'
const Header = () => {

    const {userData , setUserData} = useContext(UserContext)

    const history = useHistory();

    const register = ()=> history.push('/register')
    const login = ()=> history.push('/login')
    const logout = ()=>{
        setUserData(undefined)
        localStorage.setItem("auth-token","")
    }

    return (
    <header className="headerss">
        <Link to="/" style={{ textDecoration: 'none' }}><h1>Qna Forum</h1></Link>     
            <ul>
                <li className="activetab">Home</li>
                <li className="incativetab2">About</li>
                <li className="incativetab3">Contact us</li>
                {    userData ?
                    <li className="inactivetab2" onClick={logout}>Log out</li> :
                    <>
                    <li className="incativetab4" onClick={register}>Register</li>
                    <li className="incativetab4" onClick={login}>Login</li>
                    </>
                }
                
            </ul>     
    </header>
    )
}

export default Header


