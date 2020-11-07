import React, { useContext, useState,Suspense, useEffect } from 'react'
import {BsFillCaretDownFill} from 'react-icons/bs'
import questingImage from'../../../images/spectrum.jpg'
import avatar from  '../../../images/avatar_user_2.jpg'

import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';


import { QuestionsContext } from '../../../data/QuestionsContext'
import UserContext from '../../../data/UserContext'
import axios from 'axios';



const Reply = React.lazy(()=> import('./reply'))



const QnA = ({title,description,image,noOfReplies,id,match}) => {

    const [toggleReplies,setToggleReplies] = useState(false)
    const {userData , setUserData} = useContext(UserContext)
    const [replies,setReplies]=useState({data:[]})

    


    
const handleSubscription =async(id)=>{

    if(userData.questionSubscriptions.includes(id)){
            var subs = userData.questionSubscriptions.filter((like)=>{
                return like!= id   
            })
           
        try{
        let token = localStorage.getItem("auth-token")
        const res = await axios.put("http://localhost:5000/api/users/profile",{
            questionSubscriptions:subs
        },{headers:{"authorization": token}})
        console.log(res)
        setUserData({...userData,questionSubscriptions: subs})
        }catch(err){
                console.log(err)
                 
        }}else{
        var insertSubs = userData.questionSubscriptions
        insertSubs = [...insertSubs,id]
        console.log(insertSubs)
        setUserData({...userData,questionSubscriptions: insertSubs})
        let token = localStorage.getItem("auth-token")

        try{
        const res = await axios.put("http://localhost:5000/api/users/profile",{
            questionSubscriptions:insertSubs
        },{headers:{"authorization": token}})
        console.log(res)
        }catch(err){
        var deleteSubs = userData.questionSubscriptions.filter((like)=>{
                return like!= id
        })
        setUserData({...userData,questionSubscriptions: deleteSubs})
        console.log(err);

        }
        }
    
    }

    // _________REPLY SUBMISSION_____________
    const[replyData ,setReplyData]=useState(``)
    const handleReply=(e)=>{
        setReplyData(e.target.value)
        console.log(e.target.value)
    }

    const replySubmission =async(e)=>{
        e.preventDefault()
        
        try{
        let token = localStorage.getItem("auth-token")

        const res = await axios.post('http://localhost:5000/api/replies/',{title:'',description:replyData,question:id},{headers:{"authorization": token}})
        console.log(res)
        setReplyData(``)
        var temp = replies.data
        setReplies({data:[...temp,res.data]})
        
        }catch(err){
            console.log(err)
        }
        
        console.log(replyData)
    }



    return (    
        <div className="post">
                <div className="post-header">
                    <a style={{display:"flex",justifyContent:"space-between"}}>{title}
                        <i style={{margin:"0",padding:"0"}} onClick={()=>handleSubscription(id)}>
                            {userData && userData.questionSubscriptions.includes(id)?
                             <NotificationsActiveIcon style={{margin:"0",padding:"0"}} color="primary"/>:
                             <NotificationsNoneIcon/>
                            }
                       
                        </i>
                    </a>
                    <a href="/#">-@Harshith Kelkar</a>
                    <a href="/#"> @12:25pm 8-10-2020 </a>
                </div>
                {image && 
                <div className ="post-image">
                    <img src={questingImage} alt=""/>
                </div>
                }

                <div className="post-ques-desc">
                    <p>{description}</p>
                </div>    


                <div className="no-of-replies" onClick={()=>{setToggleReplies(!toggleReplies) }}>
                    <p>{noOfReplies} replies</p>
                    <i className="downarrow"><BsFillCaretDownFill/></i>
                </div> 

                <div className="write-new">
                    <form>
                        <textarea placeholder="Write your comment here" name="comment" onChange={handleReply} value={replyData}></textarea>
                        <div> 
                        <img src={avatar}width="35" alt="Profile of Bradley Jones" title="Bradley Jones" />
                        <button onClick={replySubmission}>Submit</button>
                        </div>  

                    </form>
                </div>

                

{/* _______________REPLIES_______________ */}
            { toggleReplies &&
            <Suspense fallback={<div></div>}>
                <Reply id={id} replies={replies} setReplies={setReplies} setToggleReplies={setToggleReplies}/>
            </Suspense>
            }
        </div>
    )
}

export default QnA
