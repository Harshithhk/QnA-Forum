import React, { useContext, useState } from 'react'
import {AiOutlineStar} from 'react-icons/ai'
import {AiFillStar} from 'react-icons/ai'
import questingImage from'../../../images/spectrum.jpg'
import avatar from  '../../../images/avatar_user_2.jpg'
import { QuestionsContext } from '../../../data/QuestionsContext'


const QnA = ({title,description}) => {

    const [toggleReplies,setToggleReplies] = useState(false)

    return (
        
        <div className="post">
                    <div className="post-header">
    <a href="/#">{title}</a>
                      <a href="/#">-@Harshith Kelkar</a>
                      <a href="/#"> @12:25pm 8-10-2020 </a>
                    </div>
                    <div className ="post-image">
                       <img src={questingImage} alt=""/>
                    </div>
                    <div className="post-ques-desc">
                       <p>
                       {description}
                         </p>
                    </div>                   
                    <div className="no-of-replies" onClick={()=>{setToggleReplies(!toggleReplies) 
                        window.scrollTo({
                            top:window.pageYOffset+300,
                            behavior:'smooth'
                        })
                        }}>
                        <p>3 replies</p>
                        <i className="fas fa-chevron-down downarrow"></i>
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
            <section className="hiddenreply">
                <div className="replies">
                        <div>
                        <h1>-@John Doe <span>@1:45pm 10-10-2020</span></h1>
                        <p> <span className="b"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat autem odit repellendus?</span> <br/> Laborum provident adipisci itaque reprehenderit officiis <br/> cumque praesentium repudiandae laboriosam, eos inventore error maxime blanditiis quis numquam Quasi iusto, esse totam error atque possimus debitis quaerat eos minima aspernatur, facere non laboriosam eius, fugiat obcaecati? Ratione eos perspiciatis molestias placeat necessitatibus fuga. Ipsam delectus laudantium, pariatur obcaecati veritatis dolorem ipsum dignissimos quod aut soluta rerum asperiores quidem voluptatem?</p>
                        </div>
                        <div className="thumbsup" name="name123">
                            <i className="thumb" id="3"><AiOutlineStar/></i>
                        </div>
                    
                    </div>
                    <div className="replies">
                        <div>
                        <h1>-@Whatsmy Name <span>@3:45pm 9-10-2020</span></h1>
                        <p> <span className="b">  consectetur adipisicing elit. Fugiat autem odit repellendus?</span> <br/> Laborum provident
                            adipisci itaque reprehenderit officiis <br/> cumque praesentium repudiandae laboriosam, eos inventore error
                            maxime blapsum dignissimos quod aut
                            soluta rerum asperiores quidem voluptatem?</p>
                            </div>
                            <div className="thumbsup">
                                <i className=" thumb"><AiFillStar/></i>
                            </div>

                    </div>
                  
                </section>
    }
                </div>

    )
}

export default QnA
