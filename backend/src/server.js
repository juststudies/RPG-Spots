const express = require('express');
const helmet = require('helmet');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config()
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 8080;
const URL = process.env.MONGO_URL;

//Tentar manter seguro
app.disable('x-powered-by');
app.use(helmet());
mongoose.connect(`mongodb://${URL}`,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(express.json());
app.use(routes)

app.listen(PORT, () => {
    console.log(`O server está sendo executado na porta: ${PORT}`);
});
