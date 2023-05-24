import React from 'react'
import Header from '../Components/Header'
import  Hero  from '../Components/Hero'
import Category from '../Components/Category'

const Home = () => {
  return (
      <div>
          <Header />
          <main>
              <article>
                <Hero/>
                <Category/>  
              </article>
          </main>
    </div>
  )
}

export default Home