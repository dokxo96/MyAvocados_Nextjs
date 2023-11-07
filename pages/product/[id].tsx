import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const ProductPage = () => {
  const { query } = useRouter()

  const [product, setProd] = useState([])
  useEffect(() => {
    fetch('/api/avo/' + query.id)
      .then((res) => res.json())
      .then(({ data, length }) => {
        console.log(data)
        setProd(data)
      })
  }, [])

  return (
    <section>
      <h1>Página producto: {query.id}</h1>
    </section>
  )
}

export default ProductPage
