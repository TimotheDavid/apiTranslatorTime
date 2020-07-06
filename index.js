const express = require("express"); 
const morgan = require('morgan'); 
const time = require('./routes/time');

const app = express(); 

app.use('/api',time);
app.use(morgan('dev'));


app.get('/',(req, res) => {
	res.send('hello world');
})


app.listen(3000, () => {console.log(`listen on port 3000`)});


