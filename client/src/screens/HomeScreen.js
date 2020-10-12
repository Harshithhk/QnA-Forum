import React from 'react'
import Header from '../components/header'
import SectionA from '../components/SectionA/SectionA'
import { QuestionsProvider } from '../data/QuestionsContext'
import './HomeScreen.css'

const HomeScreen = () => {
    return (
        <QuestionsProvider>
            <Header/>
             <section className="section-a">
            <SectionA/>
            <div className="profile"></div>
            </section>
        </QuestionsProvider>
    )
}

export default HomeScreen
