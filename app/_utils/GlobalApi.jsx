const { default: axios } = require("axios");

const axiosClient = axios.create({
  baseURL: "http://192.168.1.4:1337/api",
});

const getCategory = async () => {
  try {
    const response = await axiosClient.get("/categories?populate=*");
    return response;
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
};

const getSlider = () =>
  axiosClient.get("/sliders?populate=*").then((response) => {
    return response.data.data;
  });

export default { getCategory, getSlider };
