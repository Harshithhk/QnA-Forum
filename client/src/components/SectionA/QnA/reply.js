import React, { useEffect, useState,useContext } from 'react'
import {AiOutlineStar} from 'react-icons/ai'
import {AiFillStar} from 'react-icons/ai'
import axios from 'axios'
import UserContext from '../../../data/UserContext'

const Reply = ({id}) => {

    const {userData , setUserData} = useContext(UserContext)
    // const debug = userData.likes.includes(id);
    
    const [replies,setReplies]=useState({data:[]})
    const [loading, setLoading] = useState(false)
    // const [likeLoading, setLikeLoading] = useState(false)

    const fetchReplies =async(id)=>{    
        try{
            setLoading(true)
             const Data = await axios.get(`http://localhost:5000/api/replies/${id}`)
             console.log(Data)
             setReplies(Data)
             setLoading(false)
             
              window.scrollTo({
                            top:window.pageYOffset+300,
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
        return()=>{
            window.scrollTo({
                            top:window.pageYOffset-300,
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
    
    return (
        <section className="hiddenreply">
            {loading && <div className="reply-loader"><h1>loading...</h1></div>}
            {replies.data.map((reply)=>{
                return(
                    <div className="replies">
                        <div>
                            <h1>-@John Doe <span>@1:45pm 10-10-2020</span></h1>
                            <p> <span className="b">{reply.title}</span>{reply.description}</p>
                        </div>
                        <div className="thumbsup" name="name123" onClick={()=>likeHandler(reply._id)}>
                            <i className="thumb" id="3">
                             {
                             userData.likes.includes(reply._id)?
                                    <AiFillStar/>
                                    :
                                    <AiOutlineStar/>
                             }    
                            
                                </i>
                                {reply.noOfLikes !== 0 &&
                                <div className="nolikes">{reply.noOfLikes}</div>
                            }
                            
                        </div>
                    
                    </div>
                )
            })}   
        </section>
    )
}

export default Reply
