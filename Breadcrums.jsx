import React from 'react'
import './Breadcrums.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'

const Breadcrums = (props) => { //gets props from Product.js
  const {product}=props
  //here variable product is the product with specific id found from allPproducts array
  return (
    <div className='breadcrums'>
     HOME <img src={arrow_icon} alt="" />SHOP <img src={arrow_icon} alt="" />{product.category}<img src={arrow_icon} alt="" />{product.name}
    </div>
  )
}

export default Breadcrums

 // category : "men"
  // id: 14
  // image: "/static/media/product_14.097d9d7b9f1c85e4e293.png"
  // name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket"
  // new_price: 85
  // old_price: 120.5
