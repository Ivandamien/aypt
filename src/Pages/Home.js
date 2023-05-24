import React from 'react'
import Header from '../Components/Header'
import { Hero } from '../Components/Hero'

const Home = () => {
  return (
      <div>
          <Header />
          <main>
              <article>
          <Hero/>
                  
              </article>
          </main>
    </div>
  )
}

export default Home