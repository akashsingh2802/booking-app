import "../styles/Loader.css";

function Loader() {
  return (
    <div className="loader-container">
      <div className="loader"></div>

      <h2>Loading Hotels...</h2>

      <p>Please wait while we fetch hotel data.</p>
    </div>
  );
}

export default Loader;