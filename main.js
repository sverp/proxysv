import express from 'express';
import axios from 'axios'; // HTTP client library
import cors from 'cors';

const option = {
  allowedHeaders: '*',
}

const app = express();
app.use(cors(option))
const port = 3000;



app.get('/proxy', async (req, res) => {
  try {
   // console.log(req.params)
    let key = req.params.manga;
    const remoteResponse = await axios.get(`https://manganato.com/advanced_search?s=all&page=1&keyw=bleach}`); 
    res.json(remoteResponse.data);

  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});




app.listen(port, () => {
  console.log(`Proxy server is running on port ${port}`);
});
