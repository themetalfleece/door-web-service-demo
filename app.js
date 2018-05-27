const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/client/index.html');
});

app.use('/assets', express.static(__dirname + '/client/assets'));
app.use('/client', express.static(__dirname + '/client'));

// These ids will most likely come from a database
const allowedIds = new Set(['1', '2', '4', '6']);

// db calls
app.post('/goIn', function (req, res) {

    const id = req.body.id;

    console.log('In:', id, new Date());

    if (allowedIds.has(id)) {

        res.json({
            authorized: true
        });

    } else {

        res.json({
            authorized: false
        });

    }
});

app.post('/goOut', function (req, res) {

    const id = req.body.id;

    console.log('Out:', id, new Date());

    if (allowedIds.has(id)) {

        res.json({
            authorized: true
        });

    } else {

        res.json({
            authorized: false
        });
        
    }
});

app.post('/button', function (req, res) {

    console.log('Button:', new Date());

    res.send('ok');

});

app.listen(8080, function () {
    console.log('Server listening on port 8080!')
})