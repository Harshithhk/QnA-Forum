import React, { useContext } from 'react'
import SemiHeader from './SemiHeader'
import Qna from './QnA'
import { QuestionsContext } from '../../data/QuestionsContext'
const SectionA = () => {
    const {questions} = useContext(QuestionsContext)
    return (
     
        <div className="qna">
            <SemiHeader/>
            <section className="posts-area">
                <hr/>
                {
                    questions.map((question)=>{
                        return(
                             <Qna key={question._id} title={question.title} description={question.description} />
                        )
                    })
                }
               
            </section>
        </div> 
           
    )
}

export default SectionA
