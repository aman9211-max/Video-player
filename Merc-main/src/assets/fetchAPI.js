import axios from 'axios'

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'
const options = {
    url: BASE_URL,
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': "6d9e244f7cmshc07a855495ff4edp1d2abajsnc0de6d88b604",
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };



export const fetchAPI = async (url)=>{
    const {data} = await axios.get(`${BASE_URL}/${url}`,options);
    // console.log(data)
    return data;
}