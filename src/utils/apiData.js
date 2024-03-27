import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': 'fa0b5ff70emshb1c4b49b8b09609p197346jsnd14a92c08ec3',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

  export const apiData = async (url) => {
   const {data} = await axios.get(`${BASE_URL}/${url}`,options);
 
   return data;
  }
  