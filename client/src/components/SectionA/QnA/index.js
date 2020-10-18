import React, { useContext, useState,Suspense } from 'react'
import {BsFillCaretDownFill} from 'react-icons/bs'
import questingImage from'../../../images/spectrum.jpg'
import avatar from  '../../../images/avatar_user_2.jpg'
import { QuestionsContext } from '../../../data/QuestionsContext'
// import Reply from './reply'

const Reply = React.lazy(()=> import('./reply'))

const QnA = ({title,description,image,noOfReplies,id}) => {

    const [toggleReplies,setToggleReplies] = useState(false)

    return (    
        <div className="post">
                <div className="post-header">
                    <a href="/#">{title}</a>
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
                    <form action="#" method="post">
                        <textarea placeholder="Write your comment here" name="comment"></textarea>
                        <div> 
                        <img src={avatar}width="35" alt="Profile of Bradley Jones" title="Bradley Jones" />
                        <button type="submit">Submit</button>
                        </div>  

                    </form>
                </div>

{/* _______________REPLIES_______________ */}
            { toggleReplies &&
            <Suspense fallback={<div></div>}>
                <Reply id={id}/>
            </Suspense>
            }
        </div>
    )
}

export default QnA
