import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    
    <div className="footer">
      <div className="logo">
        <img
          src="https://logomaker.designfreelogoonline.com/media/productdesigner/logo/resized/000750_online_international_e_commerce_logo_maker-01.png"
          alt="logo"
          width="60"
          height="60"
        />
        <p>FOR YOU LADY</p>
      </div>
      <ul className="footer-link">
        <li>CONTACT</li>
        <li>ABOUT</li>
      </ul>
      <div className="footer-icon">
        <div className="contaner">
          <img
            src="https://www.kindpng.com/picc/m/1-14152_facebook-twitter-instagram-pinterest-facebook-twitter-facebook-icon.png"
            alt="f"
            width="60"
            height="60"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/3670/3670051.png"
            alt="w"
            width="60"
            height="60"
          />
          <img
            src="https://thumbs.dreamstime.com/b/isolated-instagram-logo-vector-illustration-icon-minsk-belarus-march-142910012.jpg"
            alt="i"
            width="60"
            height="60"
          />
        </div>
      </div>
    </div>
  )
};

export default Footer;
