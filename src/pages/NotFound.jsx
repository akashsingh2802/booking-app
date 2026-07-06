import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function NotFound() {
  return (
    <>
      <Navbar />

      <div className="notfound-container">
        <h1>404</h1>

        <h2>Page Not Found</h2>

        <p>
          Sorry! The page you are looking for doesn't exist.
        </p>

        <Link to="/" className="home-btn">
          ⬅ Back to Home
        </Link>
      </div>

      <Footer />
    </>
  );
}

export default NotFound;