const express = require('express');
const app = express();
const path = require('path');
const router = require('./controller');

app.use(express.static(path.join(__dirname,'www')));
app.use(express.static(path.join(__dirname, 'album')));


app.set('view engine','pug');

router(app);

app.use(function (req,res) {
   res.status(404).send('404报错哦');
});

app.listen(3000,'127.0.0.1');