import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">

        <div className="footer-col logo-col">
          <h2 className="logo">Green Mart</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur <br />
            adipiscing elit, sed do eiusmod tempor.
          </p>
        </div>

        <div className="footer-col">
          <h3>Useful Pages</h3>
          <ul>
            <li>About Us</li>
            <li>Contact</li>
            <li>Help Center</li>
            <li>Career</li>
            <li>Policy</li>
            <li>Flash Sale</li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Help Center</h3>
          <ul>
            <li>Payments</li>
            <li>Shipping</li>
            <li>Product Returns</li>
            <li>FAQ</li>
            <li>Checkout</li>
            <li>Other Issues</li>
          </ul>
        </div>
        

        <div className="footer-col">
          <h3>Contacts</h3>
          <ul className="contact">
            <li><i class="fa-solid fa-location-dot"></i>Kovilpatti, Thoothukudi</li>
            <li><i class="fa-solid fa-phone"></i> +91 93400 00000</li>
            <li><i class="fa-solid fa-message"></i>greenmart@gmail.com</li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Store Information</h3>
          <ul>
            <li>About Store</li>
            <li>Bestsellers</li>
            <li>Latest Products</li>
            <li>New Discounts</li>
            <li>Sale Products</li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2025 Green Mart. All Rights Reserved.</p>
        <p>Terms & Conditions | Privacy Policy</p>
      </div>
    </footer>
  );
}

export default Footer;
