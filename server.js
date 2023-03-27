
// // Import required libraries and models
// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const mongoose = require('mongoose');
// const Connection= require('./database/db')

// const Booking=require('./model/booking')
// const Contact=require('./model/contact')
// const login=require('./model/login')




// const app = express();


// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(cors());

// // mongoose.connect('mongodb://127.0.0.1:27017/booking', {
// //     useNewUrlParser: true,
// //     useUnifiedTopology: true,
// // })
// //     .then(() => console.log('MongoDB Connected'))
// //     .catch((err) => console.log(err));



// // const buySchema = new mongoose.Schema({
// //     ownerName: String,
// //     slotName: String,
// //     vehicleType: String,
// //     vehicleModel: String,
// //     vehicleNumber: String,
// //     entryTime: String,
// //     exitTime: String,
// //     parkingFee: Number,
// // });


// // const Buynow = mongoose.model('Buynow', buySchema);


// app.post('/buynow', async (req, res) => {
//     try {

//         const buynows = new Buynow(req.body);
//         await buynows.save();

//         res.status(201).json({ message: 'Booking created successfully' });
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({ message: 'Failed to create booking' });
//     }
// });

// // const userSchema = new mongoose.Schema({
// //     email: String,
// //     password: String,
// //     name: String,
// // });

// // // Create a new model based on the schema
// // const User = mongoose.model('User', userSchema);

// app.post('/signup', async (req, res) => {
//     try {
//         const user = new User({
//             email: req.body.email,
//             password: req.body.password,
//             name: req.body.name,
//             phoneno: req.body.phoneno,
//             address: req.body.address
//         });
//         await user.save();
//         res.status(201).json({ message: 'User created successfully' });
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({ message: 'Failed to create user' });
//     }
// });

// app.post('/login', async (req, res) => {
//     try {
//         const user = await User.findOne({ email: req.body.email });
//         if (!user) {
//             return res.status(401).json({ message: 'Invalid email or password' });
//         }
//         if (user.password !== req.body.password) {
//             return res.status(401).json({ message: 'Invalid email or password' });
//         }
//         res.status(200).json({ message: 'Login successful' });
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({ message: 'Failed to authenticate user' });
//     }
// });

// // // ---------------------------------------------- 

// // const contactSchema = new mongoose.Schema({
// //     name: String,
// //     email: String,
// //     message: String,
// // });


// // const ContactUs = mongoose.model('ContactUs', contactSchema);


// app.post('/ContactUs', async (req, res) => {
//     try {

//         const contact = new ContactUs(req.body);
//         await contact.save();

//         res.status(201).json({ message: 'Booking created successfully' });
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({ message: 'Failed to create booking' });
//     }
// });




// const port = process.env.PORT || 3000;

// app.listen(port, () => {
//     console.log(`Server started on port ${port}`);
// });

// Import required libraries and models

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const Connection = require('./database/db')

const Buynow = require('./model/buynow') // Fix model import
const ContactUs = require('./model/contactus') // Fix model import
const User = require('./model/user') // Add user model import


const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Use the Connection function to connect to MongoDB Atlas
Connection();

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

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
