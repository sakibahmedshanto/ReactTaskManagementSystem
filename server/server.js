require('dotenv').config({});
const app = require('./src/utils/app');
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
    }
);