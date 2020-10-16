import React, {createContext, useEffect, useState} from 'react'
import axios from 'axios'

export const QuestionsContext = createContext({})

  
export const QuestionsProvider = ({children})=>{

    const[questions,setQuestions] = useState([])
    useEffect(()=>{
        console.log('FETCHING')
            axios.get('http://localhost:5000/api/questions').then((res)=>{
            setQuestions(res.data)
             console.log(res.data) 
        }).catch(err=>{
            console.log(err);
        })
    },[])   
   

    return <QuestionsContext.Provider value={{questions,setQuestions}}>
        {children}
        </QuestionsContext.Provider>
}