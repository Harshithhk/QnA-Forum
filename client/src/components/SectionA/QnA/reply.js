import React, { useEffect, useState,useContext } from 'react'
import {AiOutlineStar} from 'react-icons/ai'
import {BsTrophy} from 'react-icons/bs'
import {AiFillStar} from 'react-icons/ai'
import axios from 'axios'
import UserContext from '../../../data/UserContext'
import {useHistory} from 'react-router-dom'

const Reply = ({id,replies,setReplies,setToggleReplies}) => {
    const history = useHistory()

    const {userData , setUserData} = useContext(UserContext)
    // const debug = userData.likes.includes(id);
    
    
    const [loading, setLoading] = useState(false)
    // const [likeLoading, setLikeLoading] = useState(false)

    var pageOffset=300
    const fetchReplies =async(id)=>{    
        try{
            
            setLoading(true)
             const Data = await axios.get(`http://localhost:5000/api/replies/${id}`)
             if(Data.data.length == 0){
                 pageOffset=0
                setToggleReplies(false)
             }
             console.log(`DATA`)
             console.log(Data)
             setReplies(Data)
             setLoading(false)
             
              window.scrollTo({
                            top:window.pageYOffset+pageOffset,
                            behavior:'smooth'
                        })
               
        }catch(err){
            setLoading(false)
                console.log(err)
        }
    }
    useEffect(()=>{
        fetchReplies(id)
        console.log(userData)
        if(!userData){
            history.push("/login")
        }
        return()=>{
            window.scrollTo({
                            top:window.pageYOffset-pageOffset,
                            behavior:'smooth'
                        })
        }
        
    },[])


    // LIKE FUNCTION
    const likeHandler =async (_id)=>{
        if(userData.likes.includes(_id)){
            var deleteLike = userData.likes.filter((like)=>{
                return like!= _id
            
            })
           
        try{
        let token = localStorage.getItem("auth-token")
        const res = await axios.put("http://localhost:5000/api/users/profile",{
            likes:deleteLike
        },{headers:{"authorization": token}})
        console.log(res)
        setUserData({...userData,likes: deleteLike})
        }catch(err){
                console.log(err)
                 
        }}
        else{
        var insertLike = userData.likes
        insertLike = [...insertLike,_id]
        console.log(insertLike)
        setUserData({...userData,likes: insertLike})
        

        let token = localStorage.getItem("auth-token")
        if(token === null){
        localStorage.setItem("auth-token","")
        token = ""
      }
      try{
        const res = await axios.put("http://localhost:5000/api/users/profile",{
            likes:insertLike
        },{headers:{"authorization": token}})
        console.log(res)

    }catch(err){
        var deleteLike = userData.likes.filter((like)=>{
                return like!= _id
        })
        setUserData({...userData,likes: deleteLike})
        console.log(err);
    }
    }
        
    }

// TESTING______________________________________________________
        const [op, setOp] = useState(0.3)
        const likeH = ()=>{
            if(op === 0.3){
            setOp(1)
            }else{
                setOp(0.3)
            }
        }
    
    return (
        <section className="hiddenreply">
            {loading && <div className="reply-loader"><h1>loading...</h1></div>}
            {replies.data.map((reply)=>{
                return(
                    <div className="replies" key ={reply._id}>
                        <div style={{width:"100%"}}>
                            <div style={{display:"flex", alignItems:"center",justifyContent:"space-between"}}>

                                <h1>-@{reply.userName} <span>@1:45pm 10-10-2020</span></h1>

                                <span style={{display:"flex", alignItems:"center",fontSize:"18px"}}>
                                    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}} onClick={()=>likeHandler(reply._id)}>
                                    {reply.trophies.length !== 0 &&
                                <div style={{fontSize:"15px",marginLeft:"2px",fontWeight:"bold",display:"flex",justifyContent:"center",alignItems:"center",marginRight:"10px"}}>
                                    <div style={{background:`rgba(220,20,60,0.8)`,color:"white",padding:"2px",paddingRight:"4px",paddingLeft:"4px",display:"flex",alignItems:"center",justifyContent:"center"}}>
                                    <BsTrophy style={{color:"yellow", fontSize:"18px"}}/>
                                    </div>
                                    <span style={{fontSize:"15px",marginLeft:"2px",fontWeight:"bold"}}>{reply.trophies.length+1}</span></div>}
                                        {
                                        userData.likes.includes(reply._id)?
                                        <div style={{background:`rgba(220,20,60,1)`,color:"white",padding:"2px",display:"flex",alignItems:"center",justifyContent:"center"}}>
                                        <AiFillStar />
                                        </div>:
                                        <div style={{background:`rgba(220,20,60,0.3)`,color:"white",padding:"2px",display:"flex",alignItems:"center",justifyContent:"center"}}>
                                        <AiFillStar />
                                        </div>
                                        }
                                    </div>
                                    {reply.noOfLikes == 0 &&
                                <div style={{fontSize:"15px",marginLeft:"2px",fontWeight:"bold"}}>{reply.noOfLikes}3</div>}
                                </span>

                            </div>
                            <p> <span className="b">{reply.title}</span>{reply.description}</p>  
                        </div>                  
                    </div>
                )
            })}   
        </section>
    )
}

export default Reply



    // <div className="replies">
    //                     <div>
    //                         <h1>-@John Doe <span>@1:45pm 10-10-2020</span></h1>
    //                         <p> <span className="b">{reply.title}</span>{reply.description}</p>
    //                     </div>
    //                     <div className="thumbsup" name="name123" onClick={()=>likeHandler(reply._id)}>
    //                         <i className="thumb" id="3">
    //                          {
    //                          userData.likes.includes(reply._id)?
    //                                 <AiFillStar/>
    //                                 :
    //                                 <AiOutlineStar/>
    //                          }    
                            
    //                             </i>
    //                             {reply.noOfLikes !== 0 &&
    //                             <div className="nolikes">{reply.noOfLikes}</div>
    //                         }
                            
    //                     </div>
                    
    //                 </div>