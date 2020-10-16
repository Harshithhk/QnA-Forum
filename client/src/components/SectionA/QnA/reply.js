import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import {AiOutlineStar} from 'react-icons/ai'
import {AiFillStar} from 'react-icons/ai'
import axios from 'axios'

const Reply = ({id}) => {

    const [replies,setReplies]=useState({data:[]})
    const [loading, setLoading] = useState(false)

    const fetchReplies =async(id)=>{    
        try{
            setLoading(true)
             var Data = await axios.get(`http://localhost:5000/api/replies/${id}`)

             setReplies(Data)
             setLoading(false)
             
              window.scrollTo({
                            top:window.pageYOffset+300,
                            behavior:'smooth'
                        })
                console.log(Data)
        }catch(err){
            setLoading(false)
                console.log(err)
        }
    }
    useEffect(()=>{
        fetchReplies(id)
        return()=>{
            window.scrollTo({
                            top:window.pageYOffset-300,
                            behavior:'smooth'
                        })
        }
         
    },[])
    
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
                        <div className="thumbsup" name="name123">
                            <i className="thumb" id="3"><AiOutlineStar/></i>
                        </div>
                    
                    </div>
                )
            })}   
        </section>
    )
}

export default Reply
