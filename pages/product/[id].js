import React from 'react'
import  {useRouter} from 'next/router'
const ProductID=()=>{
    const {query:{id}} = useRouter ();
    return (<div> <h1>ProductID  {id} </h1></div>)

}

export default ProductID;