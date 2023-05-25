import React from 'react'
import Header from '../Components/Header'
import  Hero  from '../Components/Hero'
import Category from '../Components/Category'
import About from '../Components/About'
import Course from '../Components/Course'
import Video from '../Components/Video'
import Stats from '../Components/Stats'

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
                  <Stats/>
              </article>
          </main>
    </div>
  )
}

export default Home