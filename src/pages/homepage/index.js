import React from 'react'
import { CssBaseline } from '@mui/material'
import PrimarySearchAppBar from '../../components/navbar'
import TopCarousel from '../../components/top-carousel'
import Carousel from '../../components/main-carousel'

function Homepage() {
  return (
    <>
    <CssBaseline />
      <PrimarySearchAppBar></PrimarySearchAppBar>
        <TopCarousel />
        <Carousel />
              {/* <h1 className="hero-title">
                every
              </h1>
              <h2 className='hero-subtitle game'>
                game
              </h2>
              <h2 className='hero-subtitle device'>
                device
              </h2>
              <h2 className='hero-subtitle free'>
                free
              </h2> */}
    </>
  )
}

export default Homepage