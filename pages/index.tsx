import React, { useEffect, useState } from 'react'

const HomePage = () => {
  const [productList, SetproductList] = useState([])
  useEffect(() => {
    fetch('/api/avo')
      .then((res) => res.json())
      .then(({ data, length }) => {
        SetproductList(data)
      })
  }, [])
  return (
    <div>
      <div>Platzi and Next.js!</div>
    </div>
  )
}

export default HomePage
