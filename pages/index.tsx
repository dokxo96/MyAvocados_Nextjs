import React, { useState, useEffect } from 'react'
import fetch from 'isomorphic-unfetch'
import Layout from '@components/Layout/Layout'
import KawaiiHeader from '@components/KawaiiHeader/KawaiiHeader'
import ProductList from '@components/ProductList/ProductList'

export const getServerSideProps = async () => {
  const res = await fetch('/api/avo')
  console.log(res)
  const { data: productList }: TAPIAvoResponse = await res.json()

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
