import React, { useContext } from 'react'
import styles from './SideProfile.module.css'
import avatar from '../../images/avatar2.png'
import {BsTrophy} from 'react-icons/bs'
import {AiFillStar} from 'react-icons/ai'
import UserContext from '../../data/UserContext'

const SideProfile = () => {

    const {userData , setUserData} = useContext(UserContext)

    return (
        <div className={styles.profile}>
            {userData &&
            <>
            <div style={{display:"flex",alignItems:"center",borderBottom: "0.5px solid lightgray"}}>
            <div className={styles.avatar}></div>
            
            <h1 style={{marginLeft:"5px",fontSize:"2rem"}}>{userData.name}</h1>
            </div>
            
            <div style={{background:"",height:"2rem", display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"0.5rem",padding:"0.5rem",marginTop:"30px"}}> <h3>Ratings Earned</h3><div></div></div>
            <ul className={styles.ul}>
            <li style={{backgroundColor: "rgb(255, 242, 245)",fontWeight:"bolder",fontSize:"1.2rem"}}>Total: <span style={{color:"crimson",marginLeft:"5px"}}>{userData.rating}</span></li>
                <li>
                    <div style={{background:`rgba(220,20,60,0.8)`,color:"white",padding:"2px",paddingRight:"4px",paddingLeft:"4px",display:"flex",alignItems:"center",justifyContent:"center",marginRight:"5px"}}>
                                    <BsTrophy style={{color:"yellow", fontSize:"18px"}}/>
                </div>
                    Endorsments : <span style={{color:"crimson",marginLeft:"5px"}}> {userData.endorsments}</span></li>

                <li>
                    <div style={{background:`rgba(220,20,60,0.8)`,color:"white",padding:"2px",paddingRight:"4px",paddingLeft:"4px",display:"flex",alignItems:"center",justifyContent:"center",marginRight:"5px"}}>
                                        <AiFillStar style={{color:"white", fontSize:"18px"}}/>
                                        </div>
                    Community : <span style={{color:"crimson",marginLeft:"5px"}}> {userData.communityRatings}</span></li>
            </ul>
            <div style={{background:"",height:"2rem", display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"0.5rem",padding:"0.5rem"}}> <h3>Notifications</h3><div></div></div>
            <ul className={styles.ul}>
                <li>Someone just replied to your message ""</li>
                <li>Someone just Starred to your reply of ""</li>
                <li>some randomg notification</li>
                <li>Idk why im even mkng this shit</li>
            </ul>


            <h1></h1>
            </>}
        </div>
    )
}

export default SideProfile
