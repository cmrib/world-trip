import type { NextPage } from 'next'
import { Header } from '../components/Header'
import { Banner } from '../components/Banner'
import { IconsBox } from '../components/TravelTypes'
import { Slider } from '../components/Slider'


const Home: NextPage = () => {
  return (

    <>
      <Header />
      <Banner />
      <IconsBox />
      <Slider />
    </>
  )
}

export default Home
