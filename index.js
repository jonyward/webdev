const express = require('express');
const app = express();
const path = require('path');
const public = path.join(__dirname, 'public')
app.use(express.static(public));
app.use('/css', express.static(__dirname + '/node_modules/boostrap/dist/css'));
const mustache = require('mustache-express');
app.engine('mustache', mustache());
app.set('view engine', 'mustache');

app.use(express.urlencoded({
    extended: true
}))

const router = require('./routes/appRoutes');
app.use('/', router);

app.listen(3000, () => {
    console.log('Server start on port 3000.');
})
