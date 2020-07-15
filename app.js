const express = require('express');
const config = require('config');
const mongoose = require('mongoose');

const app = express();

app.use('/api/recipe', require('./routes/recipe.routes'));

const PORT = config.get('port') || 4000;

async function start() {
    try {
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })

        app.listen(PORT, () => {
            console.log(`Server running at http://localhost:${PORT}/`);
        })

    } catch (e) {
        console.log('Server error', e.message);
        process.exit(1)
    }
}

start();