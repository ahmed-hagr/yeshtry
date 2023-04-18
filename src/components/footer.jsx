import React from 'react'
import "./footer.scss"
import FacebookIcon from '@mui/icons-material/Facebook';
export default function footer() {
   return (
      <footer className="footer">
         <div className=" min-container">
            <div className='row mx-0'>
               <div className="col-md-6">
                  <img src='	https://www.yeshtery.com/files/69/brand-logo-yellow.svg' alt="organization logo" className="mb-4 img-fluid" />
                  <p>This is an exclusive online platform providing the consumer with a convenient way of shopping from stores while in the convenience of their home. Supporting the latest brands and products available in the stock real time.</p>
               </div>
               <div className="col-md-6">
                  <div className="subscribe">
                     <h3>Subscribe to our newsletter</h3>
                     {
                        // {
                        //               <form className="Subscribe_form">
                        //                   <input  required="" placeholder="Enter Your Mail" className="Subscribe_input" value=""/>
                        //                   <button className="Subscribe_send">Subscribe 
                        //                   <img className="ms-1 img-fluid" src="	https://www.yeshtery.com/yeshtery/images/send.svg" alt="Subscribe"/>
                        //                   </button>
                        //               </form>
                        //             }
                     }
                  </div>
                  <div className="row">
                     <div className="col">
                        <ul>
                           <li><a href="/">About Us</a></li>
                           <li><a href="/">Contact Us</a></li>
                           <li><a href="/">Track Order</a></li>
                           <li><a href="/sell-with-us">Sell With Us</a></li>
                           <li><a href="/">Shipping And Returns</a></li>
                        </ul>
                     </div>
                     <div className="col">
                        <ul>
                           <li>
                              <div className="icon">
                                 <img src="https://www.yeshtery.com/yeshtery/images/social/facebook@2x.png" className="me-1 img-fluid" />
                              </div>
                              <a href="https://www.facebook.com/yeshtery/" target="_blank" rel="noopener noreferrer">facebook</a>
                           </li>
                           <li>
                              <div className="icon">
                                 <img src="https://www.yeshtery.com/yeshtery/images/social/instagram@2x.png" className="me-1 img-fluid" />
                              </div>
                              <a href="https://www.instagram.com/yeshtery/" target="_blank" rel="noopener noreferrer">instagram</a>
                           </li>
                           <li>
                              <div className="icon"><img src="https://www.yeshtery.com/yeshtery/images/social/linkedin@2x.png" className="me-1 img-fluid" />
                              </div>
                              <a href="https://www.linkedin.com/company/yeshtery" target="_blank" rel="noopener noreferrer">
                                 linkedin</a>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <p className="mb-2 col-md-4">© 2023 yeshtery, all rights reserved.</p>
                  <div className="Copyright col-md-4">
                     <img alt="cash" className="img-fluid" src="https://www.yeshtery.com/yeshtery/images/cash.png" />
                     <img alt="visa" className="img-fluid" src="https://www.yeshtery.com/yeshtery/images/visa.png" />
                     <img alt="matercard" className="img-fluid" src="https://www.yeshtery.com/yeshtery/images/matercard.png" />
                  </div>
                  <p className="d-flex align-items-center justify-content-center col-md-4 mb-0"><span className="Copyright_powered__by__K7U-9">Powered By</span>
                     <img className="Copyright_nasnav__icon__rUJTY img-fluid" src="https://www.yeshtery.com/yeshtery/images/nas_nav.svg" alt="NasNav" />
                  </p>
               </div>
            </div>
         </div>
      </footer>
   )
}
