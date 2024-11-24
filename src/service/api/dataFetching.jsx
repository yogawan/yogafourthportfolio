import axios from 'axios';

const API_KEY = '2EwgHp2KDX_sA-IfPi7QH5dJcswaBRbVwdBgCjJNepZEJy6mhfOF2PrNrKcXQFteYVPJtg8_CBU1So334cKqZWiqWGgTsZ2wm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnCb8sptIH9qIZiSu-mURf61YXqgXO4-NTJp3mDFby256qKgjn5XpAMh2ow3gqLQbZz6DKxlvQMXNLnG8G4xPUIhndc-xIqTNetz9Jw9Md8uu&lib=MEYdVqi-VMuL9qtFcHFTxE_0fF2P8rfPY';

const fetchData = async () => {
  try {
    const response = await axios.get(`https://script.googleusercontent.com/macros/echo?user_content_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default fetchData;