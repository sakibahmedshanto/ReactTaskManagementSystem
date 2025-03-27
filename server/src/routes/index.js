const express = require('express');
const { path, route } = require('../app');
const router = express.Router();

const routes = [
    {
        path: '/auth',
        route: require("./Auth.route").router
    }
]

routes.forEach(r => {        
    router.use(r.path, r.route);
}   
);


module.exports = router;
