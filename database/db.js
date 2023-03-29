const mongoose = require('mongoose');
// mongoose.set('useFindAndModify', false);
// mongoose.set('returnOriginal', false);
const { NODE_ENV, DB_HOST, DB_NAME,DB_USER,DB_PASS } = process.env;
const connectionStr = NODE_ENV === 'development' ? `mongodb://${DB_HOST}/${DB_NAME}`: `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;


// console.log(connectionStr);
// console.log(`Connecting to database ${DB_NAME}`);

// mongoose.connect(connectionStr, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });




// mongoose.connection.on('error', error => {
//     console.error(`Could not connect to database ${DB_NAME}, error = `, error.message); 
//     process.exit(1);
// });
// mongoose.connection.on('open',function() {
//     console.log('Connected to database ');
// });

const Connection = () => {
    try {
        mongoose.connect(connectionStr, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Database is connected ");
    } catch (error) {
        console.error("Error while connecting to MongoDB: ", error);
    }
};

module.exports = Connection;





