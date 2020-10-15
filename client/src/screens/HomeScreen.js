import React from 'react'
import Header from '../components/header'
import LeftTabs from '../components/LeftTabs'
import SectionA from '../components/SectionA/SectionA'
import { QuestionsProvider } from '../data/QuestionsContext'
import {StickyContainer} from 'react-sticky' 
import './HomeScreen.css'

const HomeScreen = () => {
    window.scroll({behaviour:'smooth'})
    return (
        <QuestionsProvider>    
            <StickyContainer>
                <section className="section-a">
                    <LeftTabs/>
                    <SectionA/>
                    <div className="profile"></div>
                </section>
            </StickyContainer>
           
        </QuestionsProvider>
    )
}

export default HomeScreen
