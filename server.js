require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const Connection = require('./database/db')
const path = require('path');
const Buynow = require('./model/buynow') 
const ContactUs = require('./model/contactus') 
const User = require('./model/user') 


const app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(process.cwd(),'public')));


app.post('/buynow', async (req, res) => {
  try {
    const buynow = new Buynow(req.body); // Use the Buynow model
    await buynow.save();
    res.status(201).json({ message: 'Booking created successfully' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Failed to create booking' });
  }
});

app.post('/signup', async (req, res) => {
  try {
    const user = new User({
      email: req.body.email,
      password: req.body.password,
      name: req.body.name,
      phoneno: req.body.phoneno,
      address: req.body.address,
    });
    await user.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Failed to create user' });
  }
});

app.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    if (user.password !== req.body.password) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    res.status(200).json({ message: 'Login successful' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Failed to authenticate user' });
  }
});

app.post('/ContactUs', async (req, res) => {
  try {
    const contact = new ContactUs(req.body); // Use the ContactUs model
    await contact.save();
    res.status(201).json({ message: 'Contact us message created successfully' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Failed to create contact us message' });
  }
});

app.use(function(req,res,next){
  res.sendFile(path.join(process.cwd(),'public','index.html'))
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

