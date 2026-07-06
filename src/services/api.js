import axios from "axios";

const api = axios.create({
  baseURL: "https://demohotelsapi.pythonanywhere.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getHotels = async () => {
  try {
    const response = await api.get("/hotels/");
    return response.data;
  } catch (error) {
    console.error("Error fetching hotels:", error);
    throw error;
  }
};

export const getHotelById = async (id) => {
  try {
    const response = await api.get(`/hotels/${id}/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching hotel:", error);
    throw error;
  }
};

export default api;
