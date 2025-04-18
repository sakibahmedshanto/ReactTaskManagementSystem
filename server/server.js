require('dotenv').config({});
require('colors');
const { ConnectDb } = require('./src/config/db.config');
const app = require('./src/app');
const port = process.env.PORT || 3000;

ConnectDb();

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
}).on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error(`Port ${port} is already in use. Please use a different port.`);
        process.exit(1);
    }
});