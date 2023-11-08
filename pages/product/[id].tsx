import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { GetStaticProps } from 'next'
import Layout from '@components/Layout/Layout'
import ProductSummary from '@components/ProductSummary/ProductSummary'

export const getStaticPaths = async () => {
  const res = await fetch('http://localhost:3000/api/avo')
  const { data: productList }: TAPIAvoResponse = await res.json()

  const paths = productList.map(({ id }) => ({
    params: {
      id,
    },
  }))
  return {
    paths,
    fallback: false,
  }
}
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id as string
  const res = await fetch(`http://localhost:3000/api/avo/${id}`)

  const product: TProduct = await res.json()
  console.log(product)
  return {
    props: {
      product,
    },
  }
}
const ProductPage = ({ product }: { product: TProduct }) => {
  return (
    <Layout>
      {product == null ? null : <ProductSummary product={product} />}
    </Layout>
  )
}

export default ProductPage
