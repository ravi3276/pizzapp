import Head from 'next/head'
import Image from 'next/image'
import BannerSlider from './components/BannerSlider'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import PizzaList from './components/PizzaList'

export default function Home() {
  return (
    <>
      <Head>
        <title>MagicBox</title>
      </Head>
    <div>
      <Navbar />
      <BannerSlider />
      <PizzaList />
      <Footer />
    </div>
    </>
  )
}
