import React, { useContext, useEffect, useState } from 'react'
import SemiHeader from './SemiHeader'
import Qna from './QnA'
import { QuestionsContext } from '../../data/QuestionsContext'
import UserContext from '../../data/UserContext'
import { Route, useLocation } from 'react-router-dom'

import CreateQuestion from '../CreateQuestion'

const SectionA = ({what,setWhat}) => {
    const location = useLocation();
    const {questions} = useContext(QuestionsContext)
    const {userData , setUserData} = useContext(UserContext)
    


    useEffect(()=>{
 
        if(location.pathname == "/myquestions" && userData){
          setWhat(questions.filter((question)=>{
              return(
            userData.questionSubscriptions.includes(question._id)
          )
         }))
         console.log("WORKING")   
        }else{
            setWhat("What");
        }
    },[userData,questions,location])
    return (
        <div className="qna">
            <SemiHeader/>
            <section className="posts-area">
                <hr/>
                {what == "What"?
                
                    questions.map((question)=>{
                        return(
                             <Qna key={question._id} title={question.title} description={question.description}
                             image={question.image}
                             noOfReplies={question.noOfReplies}
                             id={question._id} user={question.user}
                              />
                        )
                    }):
                    what =="createQ"?
                    <>
                   
                    <CreateQuestion/>
                    </>
                    :
                    what.map((question)=>{
                        return(
                             <Qna key={question._id} title={question.title} description={question.description}
                             image={question.image}
                             noOfReplies={question.noOfReplies}
                             id={question._id}
                              />
                        )
                    })
                }
               
            </section>
        </div> 
           
    )
}

export default SectionA
