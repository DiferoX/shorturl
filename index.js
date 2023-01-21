const express = require('express');
const mongoose = require('mongoose');
const Url = require('./models/Url');
const app = express();

// mongoose.connect('mongodb://localhost/urlShortener', {
//   useNewUrlParser: true, useUnifiedTopology: true
// })

mongoose.connect('mongodb://127.0.0.1:27017/test')

// main().catch(err => console.log(err));

// async function main() {
//   await mongoose.connect('mongodb://127.0.0.1:27017/test')
// }

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false}));

app.get('/', async (req, res) => {
  const shortUrls = await Url.find()
  res.render('home', { shortUrls: shortUrls })
})

app.post('/shortUrls', async (req, res) => {
  await Url.create({ full: req.body.fullUrl })

  res.redirect('/')
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server PORT: " + PORT));