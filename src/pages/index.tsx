import type { NextPage } from 'next'
import { Header } from '../components/Header'
import { Banner } from '../components/Banner'
import { IconsBox } from '../components/TravelTypes'


const Home: NextPage = () => {
  return (

    <>
      <Header />
      <Banner />
      <IconsBox />
    </>
  )
}

export default Home
