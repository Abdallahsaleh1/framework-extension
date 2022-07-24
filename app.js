const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');

//Database Connection
const db = require('./src/server');

db.connect(function(err) {
    if (err) {
        console.log('Error: ' + err);
        throw err;
    }
    console.log('Database connected...');
    refreshConnection();
});
function refreshConnection() {
  setInterval(function () {
    db.query('SELECT 1');
  }, 5000);
}

function refreshConnection() {
  setInterval(function () {
    db.query('SELECT 1');
  }, 5000);
}

const app = express();


app.use(bodyParser.json({ limit: "10mb", extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use('/', require('./src/routes/studentsRoute'));

app.response.status = function (jsonResponse) {
  return this.contentType('application/json')
    .json({data:jsonResponse.data})
}



const PORT = process.env.PORT || 5000;
try {
    app.listen(PORT, console.log(`Server started on port ${PORT}`));
} catch (err) {
    console.log("Error: " + err)
};