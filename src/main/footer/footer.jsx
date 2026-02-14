import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-col logo-col">
          <h2 className="logo">Green Mart</h2>
          <p>Trusted agri store for seeds, nutrition, crop protection, and farm essentials.</p>
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
            <li>Address: Kovilpatti, Thoothukudi</li>
            <li>Phone: +91 93400 00000</li>
            <li>Email: greenmart@gmail.com</li>
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
        <p>Copyright 2026 Green Mart. All rights reserved.</p>
        <p>Terms and Conditions | Privacy Policy</p>
      </div>
    </footer>
  );
}

export default Footer;
