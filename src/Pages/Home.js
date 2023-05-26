import React from 'react'
import Header from '../Components/Header'
import  Hero  from '../Components/Hero'
import Category from '../Components/Category'
import About from '../Components/About'
import Course from '../Components/Course'
import Video from '../Components/Video'
import StatsSection from '../Components/StatsSection'
import Footer from '../Components/Footer'
import Top from '../Components/Top'
import Blog from '../Components/Blog'

const Home = () => {
  return (
      <div>
          <Header />
          <main>
              <article>
                <Hero/>
                <Category /> 
                <About /> 
                <Course />  
                <Video/>
                <StatsSection />
                <Blog/>
              </article>
      </main>
      <Footer />
      <Top/>
    </div>
  )
}

export default Home