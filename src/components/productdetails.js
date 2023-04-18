import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';

// import "./styles.scss";

export default (props) => {
  const [loading, setloading] = React.useState(false);
  const mainurl = "https://api.yeshtery.com/v1/yeshtery/files/"


  useEffect(() => {
    if (props.ProductDetails) {
      setloading(true)
    }

  }, [props.ProductDetails]);


  return (
    <div className='ProductDet' >
      {loading ?
        <div>
          <img className="brand-logo" src={mainurl + props.Brands.content[0].logo_url} />
          <h4 className='my-2'>{props.ProductDetails.name}</h4>
          <h5 className='my-2'>{props.Brands.content[0].p_name}</h5>
          <h6 className='my-2 price'>{props.ProductDetails.price} EGP  </h6>
          <h6 className='my-2 '>color : {props.ProductDetails.default_variant_features.color}   </h6>
          <h6 className='my-2 '>size : {props.ProductDetails.default_variant_features.size}   </h6>
          <Button onClick={props.addToCart} className='cart-Btn'>
            Add To Cart
          </Button>
        </div> :

        <div>

        </div>
      }
    </div>
  )
}
