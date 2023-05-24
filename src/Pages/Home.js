import React from 'react'
import Header from '../Components/Header'
import  Hero  from '../Components/Hero'
import Category from '../Components/Category'
import About from '../Components/About'

const Home = () => {
  return (
      <div>
          <Header />
          <main>
              <article>
                <Hero/>
                <Category /> 
                <About/>  
              </article>
          </main>
    </div>
  )
}

export default Home