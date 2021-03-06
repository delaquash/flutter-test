const express = require ('express');

const app = express();


// Initialise body-parser
app.use(express.json({extended: false }))



app.get('/', (req, res) => {
    res.send('api running')
});

// Api Route
app.use('/api/user', require('./routes/api/user'))


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));