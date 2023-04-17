import axios from "axios";

// const axios = require("axios");

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {maxResults: '50'},
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    
  }
};

export const fetching = async(url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
}