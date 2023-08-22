import express from 'express';
import axios from 'axios'; // HTTP client library
import cors from 'cors';

const option = {
  allowedHeaders: '*',
}

const app = express();
app.use(cors(option))
const port = 3000;


//get all manga with similar name.
app.get('/proxy/:manga', async (req, res) => {
  try {
   // console.log(req.params)
    let param = req.params.manga;
    const remoteResponse = await axios.get(`https://mangapanda.in/search?q=${param}`); 
    res.json(remoteResponse.data);

  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

//get manga info and chapter list
app.get('/proxy/manga/:manga_list', async (req, res) => {
  try {
   // console.log(req.params)
    let param = req.params.manga_list;
    const remoteResponse = await axios.get(`https://mangapanda.in/manga/${param}`); 
    res.json(remoteResponse.data);

  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});


app.get('/proxy/manga_list/:chapter', async (req, res) => {
  try {
   // console.log(req.params)
    let param = req.params.chapter;
    const remoteResponse = await axios.get(`https://mangapanda.in/${param}`); 
    res.json(remoteResponse.data);

  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});



app.listen(port, () => {
  console.log(`Proxy server is running on port ${port}`);
});
