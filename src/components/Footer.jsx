import "../styles/Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* About */}
        <div className="footer-section">
          <h2>🏨 Hotel Booking</h2>
          <p>
            Find the best hotels at the best prices.
            Enjoy a comfortable stay with trusted hotels.
          </p>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>

          <p>📍 India</p>
          <p>📧 support@hotelbooking.com</p>
          <p>📞 +91 98765*****</p>
        </div>

      </div>

      <hr />

      <div className="footer-bottom">
        <p>
          © {currentYear} Hotel Booking. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;