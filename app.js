const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 80;

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/CycleDetails', { useNewUrlParser: true });

const cycleSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  address: String,
  desc: String,
});

var Cycle = mongoose.model('Cycle', cycleSchema);

app.get('/contact', (req, res) => {
  const params = {}
  res.status(200).render('backend.html', params);
})

app.post('/contact', (req, res) => {

  var myData = new contact(req.body);
  myData.save().then(() => {
    res.send("this item has been saved")
  }).catch(() => {
    res.status(400).send("cannot save to the database")
  });
})


// START THE SERVER
app.listen(port, () => {
  console.log(`The application started successfully on port ${port}`);
});