import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import Card from 'react-bootstrap/Card';


import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

import "./mainNavpar.scss"

export default (props) => {
  const mainurl = "https://api.yeshtery.com/v1/yeshtery/files/"

  const [myCart, setmMCart] = useState(JSON.parse(window.localStorage.getItem("myCart")));

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [loading, setloading] = useState(true);

  const [myCartLength, setMyCartLength] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (props.myCartprops) {
      setloading(false)
      setMyCartLength(props.myCartprops.length)

    }

  }, [props.myCartprops]);
  const gettotal = () => {

    let tot = 0
    props.myCartprops.filter(prices => tot += prices.price)
    return tot

  }
  return (
    <header className='mainHeader'>
      <Navbar fixed="top" bg="light" expand={false} className="mb-0 navpar">
        <Container className='d-flex justify-content-start contatiner min-cont ' fluid>
          <Navbar.Toggle className='navtoogle' aria-controls={`offcanvasNavbar-expand-false`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="18.219" viewBox="0 0 24 18.219"><g transform="translate(-2557.581 -332.903)"><path d="M2580.248,335.57h-21.334a1.333,1.333,0,0,1,0-2.667h21.334a1.333,1.333,0,0,1,0,2.667Z"></path><path d="M2576.248,343.346h-17.334a1.334,1.334,0,0,1,0-2.667h17.334a1.334,1.334,0,0,1,0,2.667Z"></path><path d="M2580.248,351.122h-21.334a1.333,1.333,0,0,1,0-2.666h21.334a1.333,1.333,0,0,1,0,2.666Z"></path></g></svg>
          </Navbar.Toggle>
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-false`}
            aria-labelledby={`offcanvasNavbarLabel-expand-false`}
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-false`}>
                category
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>


            </Offcanvas.Body>
          </Navbar.Offcanvas>
          <Navbar.Brand className='ms-1' href="/">
            <img className='logo' src='	https://www.yeshtery.com/files/69/brand-logo-yellow.svg' />
          </Navbar.Brand>

          <Nav className="ms-auto d-flex flex-row">
            <Link className='min-links' onClick={handleShow}>
              <span className='cartcont' >
                <ShoppingBasketIcon className='main-icons' />
                <span className='ps-1 d-none d-md-inline'>
                  cart</span>{!loading ?
                    <span className='cartnum'>{myCartLength}</span> : null}
              </span>
            </Link>
            <Link className='min-links' to="/whitelist">
              <FavoriteBorderOutlinedIcon className='main-icons' />
              <span className='ps-1 d-none d-md-inline'>whitelist</span>

            </Link>
            <Link className='min-links' to="/Login">
              <PersonOutlineOutlinedIcon className='main-icons' />
              <span className='ps-1 d-none d-md-inline'>Login</span>            </Link>
          </Nav>
        </Container>
      </Navbar>
      <Navbar bg="light" expand={false} className="mb-3 navpar stickyNav d-none d-md-inline ">
        <Container className='d-flex justify-content-start contatiner ' fluid>

          <Nav className="justify-content-between d-flex flex-row w-100 m-auto">
            <Link className='min-links' to="/MenCategory">
              Men
            </Link>
            <Link className='min-links' to="/WomenCategory">
              Women
            </Link>
            <Link className='min-links' to="/Kids-category">
              Kids
            </Link>
            <Link className='min-links' to="/Sports&fitness">
              Sports & fitness
            </Link>
            <Link className='min-links' to="/ELectronic-category">
              ELectronic
            </Link>

          </Nav>
        </Container>
      </Navbar>

      <Offcanvas className="myCarts-cont " placement="end" show={show} onHide={handleClose}>
        <Offcanvas.Header className='ms-auto' closeButton>

        </Offcanvas.Header>
        <Offcanvas.Body>
          <></>
          <Offcanvas.Title className='text-center cart-tilte mb-3'>My Cart</Offcanvas.Title>
          <h5>cart summary</h5>

          {props.myCartprops.length ?
            <React.Fragment>
              {props.myCartprops.map((cart, index) => {
                return (
                  <Card className='my-2 p-2' key={index}>
                    <div className='d-flex'>
                      <div className='CartItem_imageCont'>
                        <img className='img-fluid' src={mainurl + cart.image_url} />
                      </div>
                      <div className=''>
                        <h5 className='cart-name'>{cart.name}</h5>
                        <h5 className='cart-name'>color: {cart.default_variant_features.color}</h5>
                        <h4 className='cart-price'> {cart.price}</h4>

                      </div>
                    </div>
                  </Card>
                )
              })
              }
              <h3 className='text-center'>

                Total: {gettotal()} EGP
              </h3>
            </React.Fragment>
            : <h5 className='text-center'>You have no items yet..</h5>
          }


        </Offcanvas.Body>
      </Offcanvas>
    </header>
  );
}





