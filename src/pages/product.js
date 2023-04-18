import React, { Component } from 'react';

import axios from "axios";
import Swiper from '../components/swiper';
import Productdetails from '../components/productdetails';
import SimilaProduct from "../components/similarProduct"
import { json } from 'react-router-dom';



class Product extends Component {
    state = {
        ProductDetails: false,
        Brands: false,
        SimilarCategory: false
    }
    constructor(props) {
        super(props);


    }
    componentDidMount() {


        Promise.all([
            axios.get("https://api.yeshtery.com/v1/yeshtery/product?product_id=729517")
                .then(res => {
                    this.setState({
                        ProductDetails: res.data
                    })
                })
            ,
            axios.get("https://api.yeshtery.com/v1/yeshtery/brands?brand_id=805&start=0&count=1000")
                .then(res => {
                    this.setState({
                        Brands: res.data
                    })
                })
            ,
            axios.get("https://api.yeshtery.com/v1/yeshtery/products?tag_ids28048,28091,28114,28154,28156,28157,29432,29433&start=0&count=16&sort=PRIORITY&order=DESC")
                .then(res => {
                    this.setState({
                        SimilarCategory: res.data
                    })
                })
        ])

    }
    addToCart = () => {

        let myCart = JSON.parse(window.localStorage.getItem("myCart")) ? JSON.parse(window.localStorage.getItem("myCart")) : [];
        myCart.push(this.state.ProductDetails)
        this.props.getcartItems(myCart)
        localStorage.setItem("myCart", JSON.stringify(myCart))
    }
    render() {

        return (
            <div className='min-cont'>
                <div className='row mx-0'>
                    <div className='col-md-6'>
                        <Swiper ProductDetails={this.state.ProductDetails} />
                    </div>
                    <div className='col-md-6'>
                        <Productdetails
                            ProductDetails={this.state.ProductDetails}
                            Brands={this.state.Brands}
                            addToCart={this.addToCart}
                        />
                    </div>
                    <div className='col-12'>
                        <SimilaProduct SimilarCategory={this.state.SimilarCategory} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;;

