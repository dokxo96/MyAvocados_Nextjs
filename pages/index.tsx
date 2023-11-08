import React, { useState, useEffect } from 'react'
import fetch from 'isomorphic-unfetch'
import Layout from '@components/Layout/Layout'
import KawaiiHeader from '@components/KawaiiHeader/KawaiiHeader'
import ProductList from '@components/ProductList/ProductList'

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:3000/api/avo')

  const { data: productList }: TAPIAvoResponse = await res.json()
  console.log(productList)
  return {
    props: {
      productList,
    },
  }
}
const HomePage = ({ productList }: { productList: TProduct[] }) => {
  return (
    <Layout>
      <KawaiiHeader />
      <ProductList products={productList} />
    </Layout>
  )
}

export default HomePage
