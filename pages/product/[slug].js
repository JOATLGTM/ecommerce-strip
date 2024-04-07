import React from 'react'

import { client, urlFor } from '../../lib/client';

const ProductDetails = () => {
    return (
        <div>
            <div className="product-deatil-container">
                <div>
                    <div className="image-container">
                        <img src="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

// Next.js will pre-render this page at build time using the props returned by 'getStaticProps'
// When should we use getStaticProps? Data comes from a headless CMS
export const getStaticProps = async () => {
    const productQuery = '*[_type == "product"]'
    const productData = await client.fetch(productQuery)
    const bannerQuery = '*[_type == "banner"]'
    const bannerData = await client.fetch(bannerQuery)

    return {
        props: { productData, bannerData }
    }
}

export default ProductDetails