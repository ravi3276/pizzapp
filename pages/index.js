import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import BannerSlider from './components/BannerSlider'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import PizzaList from './components/PizzaList'

export default function Home({pizzaList}) {
  // console.log(pizzaList)
  return (
    <>
      <Head>
        <title>MagicBox</title>
      </Head>
    <div>
      <Navbar />
      <BannerSlider />
      <PizzaList pizzaList={pizzaList}/>
      <Footer />
    </div>
    </>
  )
}

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/product");
  return {
    props: {
      pizzaList: res.data.products,
    }
  };
};