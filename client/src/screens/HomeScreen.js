import React, { useState } from 'react'
import LeftTabs from '../components/LeftTabs'
import SideProfile from '../components/SideProfile'
import SectionA from '../components/SectionA/SectionA'
import { QuestionsProvider } from '../data/QuestionsContext'
import {StickyContainer} from 'react-sticky' 
import './HomeScreen.css'


const HomeScreen = () => {

    const [what , setWhat] = useState("What");

    window.scroll({behaviour:'smooth'})
    return (
        <QuestionsProvider>    
            <StickyContainer>
                <section className="section-a">
                    <LeftTabs what={what} setWhat={setWhat}/>
                    <SectionA what={what} setWhat={setWhat}/>
                    <SideProfile/>
                </section>
            </StickyContainer>
           
        </QuestionsProvider>
    )
}

export default HomeScreen
