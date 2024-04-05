import React from 'react'
import Link from 'next/link'

const HeroBanner = () => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">Small Text</p>
        <h3>MID TEXT</h3>
        <img src="" alt="headphones" className="hero-banner-image" />
        <Link href="/products/ID">
          <button type="button">BUTTON TEXT</button>
        </Link>
        <div className="desc">
          <h5>Description</h5>
          <p>Description</p>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner