const express = require('express');
const router = express.Router();


router.get('/', function(req, res, next) {
    res.header('Content-Security-Policy', `style-src 'none'`);
    res.sendFile(path.join(__dirname, '/index.html'));
});