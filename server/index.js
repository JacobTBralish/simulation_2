const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();
const controller = require('./controller');

const app = express();
app.use(bodyParser.json())



massive(process.env.CONNECTION_STRING).then(database => {
    console.log('Hooked up to your database bruhh.🤙')
    app.set('db', database);
}).catch( err => console.log(err) );


app.get('/api/houses', controller.getHouses);

app.post('/api/houses', controller.addNewHouse);
// app.post('/api/houses', controller.addNewImg);
// app.post('/api/houses', controller.addCost);

app.delete(`/api/houses/:id`, controller.deleteHouse);

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}.🏄`)
})