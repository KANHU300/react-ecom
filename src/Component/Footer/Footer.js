import React from "react";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
<div className="global-aims-footer">
    <div className="container">

    <div className="row">
    <div className="col-6 col-md-3">
      <div className="globalaim">
      <img className="logo-edit1" src="/images/Justright-logo.png" alt="no-data" />
        <p className="globalaimpara">
        Revolutionizing the online B2B marketplace, offering over 3,500 top-notch products and serving around 10,000 registered users worldwide.
        </p>
        <div className="supportemail">
        <img src="/images/LandingPg/line.svg" className="iconContact" />
          <p href="mailto:support@gmglobalenterprise.com" className="gm-email">
          info@justright.com
          </p>
        </div>
        <div className="supportemail">
        <img src="/images/LandingPg/cl.svg" className="iconContact" />
          <div className="gm-email">
            <p href="tel:+971528943890" className="gm-number">
            +971-4-804-9888
            </p>
            
          </div>
        </div>
        
      </div>
    </div>
    <div className="col-6 col-md-2">
      <div className="categories">
        <h2 className="categoriesheader">Company</h2>
        <div className="categoriesitems">
          <NavLink className="categoriesmaterials" to={"/allblogs"}>Blog </NavLink>
        </div>
        <div className="categoriesitems">
          <a className="categoriesmaterials">FAQ</a>
        </div>
        <div className="categoriesitems">
          <a className="categoriesmaterials">Help Desk</a>
        </div>
        <div className="categoriesitems">
          <a className="categoriesmaterials">Contact Us</a>
        </div>
        <div className="categoriesitems">
          <a className="categoriesmaterials">Full Store Directory</a>
        </div>
       
      </div>
    </div>
    <div className="col-6 col-md-2">
      <div className="categories">
        <h2 className="categoriesheader">Account</h2>
        <div className="categoriesitems">
          <a className="categoriesmaterials">Log in</a>
        </div>
        <div className="categoriesitems">
          <a className="categoriesmaterials">Register</a>
        </div>
       
      </div>
    </div>
    <div className="col-6 col-md-2">
      <div className="categories">
        <h2 className="categoriesheader">Our Policies</h2>
        <div className="categoriesitems">
          <a className="categoriesmaterials">Reseller Partnership</a>
        </div>
        <div className="categoriesitems">
          <a className="categoriesmaterials">Returns & Refunds</a>
        </div>
        <div className="categoriesitems">
          <a className="categoriesmaterials">Terms & Conditions</a>
        </div>
        <div className="categoriesitems">
          <a className="categoriesmaterials">Privacy & Cookie Policy</a>
        </div>
        <div className="categoriesitems">
          <a className="categoriesmaterials">Delivery</a>
        </div>
      </div>
    </div>
    <div className="col-6 col-md-3">
      <div className="categories">
        {/* <h2 className="categoriesheader">NEWSLETTER</h2> */}
        <div className="categoriesitems">
          <a className="SecuredPay">Secured Payment Gateways
          </a>
          <div className="visa">
          <img src="/images/LandingPg/master.png" className="visa-image" />
          <img src="/images/LandingPg/visaimg.png" className="visa-image" />
          <img src="/images/LandingPg/american.png" className="visa-image" />
          <img src="/images/LandingPg/pay.svg" className="visa-image" />
        </div>
        </div>
        <div className="categoriesicons">
          <a>
          <img src="/images/LandingPg/linkdin.svg" className=" iconTwitter" />
          </a>
          <a>
          <img src="/images/LandingPg/fb.svg" className=" iconTwitter" />
          </a>
          <a>
          <img src="/images/LandingPg/insta.svg" className=" iconTwitter" />
          </a>
   
          <a>
          <img src="/images/LandingPg/twitter.svg" className=" iconTwitter" />
          </a>

          <a>
          <img src="/images/LandingPg/tick.svg" className=" iconTwitter" />

          </a>
        </div>
        
     
      </div>
    </div>
  </div>
  <div className="footeraim">
    <p className="footerglobal">© 2024 <span className="BrandName">Justright</span>. All rights reserved.</p>
  </div>
    </div>
</div>

  );
};

export default Footer;
