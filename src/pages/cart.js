import React, { Component } from 'react';

class Cart extends Component {
    state = {

    }
    componentDidMount() {
        fetch('https://api.yeshtery.com/v1/yeshtery/products?tag_ids=27994,28001,28072,28132,28465&start=0&count=16&sort=PRIORITY&order=DESC')
            .then(res => res.json())
    }
    render() {
        return (
            <div>

            </div>
        );
    }
}

export default Cart;

