import React from 'react'
import { HeroBanner, FooterBanner, Product } from '../components'
import { client } from '../lib/client';

const Home = ({ productData, bannerData }) => {
  console.log(productData, bannerData)
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <div className="products-heading">
        <h2>Best Seling Products</h2>
        <p>Speakers of many variations</p>
      </div>

      <div className="products-container">
        {productData?.map(product => product.name)}
      </div>

      <FooterBanner />
    </>
  )
}

// next.js version of useEffect for making async api calls
export const getServerSideProps = async () => {
  const productQuery = '*[_type == "product"]'
  const productData = await client.fetch(productQuery)
  const bannerQuery = '*[_type == "banner"]'
  const bannerData = await client.fetch(bannerQuery)

  return {
    props: { productData, bannerData }
  }
}

export default Home