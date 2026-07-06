import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import HotelCard from "../components/HotelCard";
import Loader from "../components/Loader";
import Footer from "../components/Footer";

import { getHotels } from "../services/api";

import "../styles/Home.css";

function Home() {
  const [hotels, setHotels] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [currentPage, setCurrentPage] = useState(1);

  const hotelsPerPage = 33;

  useEffect(() => {
    fetchHotels();
  }, []);

  const fetchHotels = async () => {
    try {
      setLoading(true);

      const response = await getHotels();

      console.log("API Response:", response);

      const hotelList = response.data || [];

      setHotels(hotelList);
      setFilteredHotels(hotelList);
    } catch (err) {
      console.error(err);
      setError("Failed to load hotels.");
    } finally {
      setLoading(false);
    }
  };
  const lastHotelIndex = currentPage * hotelsPerPage;
  const firstHotelIndex = lastHotelIndex - hotelsPerPage;

  const currentHotels = filteredHotels.slice(
    firstHotelIndex,
    lastHotelIndex
  );

  const totalPages = Math.ceil(
    filteredHotels.length / hotelsPerPage
  );

  return (
    <>
      <Navbar />

      <div className="home-container">

        <h1 className="home-title">
          Find Your Perfect Hotel
        </h1>

        <SearchBar
          hotels={hotels}
          setFilteredHotels={setFilteredHotels}
        />

        {loading ? (
          <Loader />
        ) : error ? (
          <h2 className="error">{error}</h2>
        ) : (
          <>
            <div className="hotel-grid">
              {currentHotels.map((hotel) => (
                <HotelCard
                  key={hotel.id}
                  hotel={hotel}
                />
              ))}
            </div>

            <div className="pagination">

              <button
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
              >
                ◀ Previous
              </button>

              <span>
                Page {currentPage} of {totalPages}
              </span>

              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next ▶
              </button>

            </div>
          </>
        )}

      </div>

      <Footer />
    </>
  );
}

export default Home;