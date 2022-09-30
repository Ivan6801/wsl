const express = require('express');
const words = require('../components/words/network');

const routes = function (server){
    server.use('/words', words);
}

module.exports = routes;