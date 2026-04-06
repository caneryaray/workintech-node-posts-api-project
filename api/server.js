// server için gerekli olanları burada ayarlayın

const express = require('express');
const cors = require('cors');

// posts router'ını buraya require edin ve bağlayın
const postsRouter = require('./posts/posts-router');

const server = express();

server.use(express.json());
server.use(cors());

// router bağlama
server.use('/api/posts', postsRouter);

module.exports = server;