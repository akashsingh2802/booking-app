import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

import { getHotelById } from "../services/api";

import "../styles/Details.css";

function HotelDetails() {
  const { id } = useParams();

  const [hotel, setHotel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchHotel();
  }, [id]);

  const fetchHotel = async () => {
    try {
      setLoading(true);
        const response = await getHotelById(id);

console.log("Hotel Details:", response);

setHotel(response.data);
      
    } catch (err) {
      console.error(err);
      setError("Unable to load hotel details.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <Loader />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Navbar />

        <div className="details-error">
          <h2>{error}</h2>

          <Link to="/" className="back-btn">
            Back to Home
          </Link>
        </div>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="details-container">

       <img
  src={hotel.photos?.[0] || hotel.thumbnail}
  alt={hotel.name}
  className="details-image"
/>

        <div className="details-content">

          <h1>{hotel.name}</h1>

          <p className="rating">
            ⭐ {hotel.rating}
          </p>

          <p className="price">
            ₹ {hotel.price} / Night
          </p>

          <p className="description">
            {hotel.description}
          </p>

          <Link to="/" className="back-btn">
            ← Back to Home
          </Link>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default HotelDetails;