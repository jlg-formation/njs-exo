const express = require('express');
const serveIndex = require('serve-index');
const app = express();

app.use((req, res, next) => {
    console.log('req.url', req.url);
    next();
});

app.use(express.static('.'));
app.use(serveIndex('.', { icons: true }));

app.use((req, res, next) => {
    console.log('Not found', req.url);
    next();
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
