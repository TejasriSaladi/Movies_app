const express=require('express');
app=express();
const db=require('./db');
const bodyParser=require('body-parser');
app.use(bodyParser.json());
require('dotenv').config();
const cors = require('cors');
app.use(cors());

app.use(express.static(path.join(__dirname, '../Frontend')));

// Serve the index.html file for any other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../Frontend', 'index.html'));
});

const reviewroutes=require('./routes/review_routes');
app.use('/review',reviewroutes);

const PORT=process.env.PORT||3000;
app.listen(PORT,()=>{
    console.log(`listening on ${PORT}`);
})
