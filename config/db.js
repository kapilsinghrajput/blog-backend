const mongoose = require("mongoose");

mongoose.connect( `mongodb+srv://kplsinghshekhawat:kapil12345@cluster0.m5zfg7x.mongodb.net/myusers`, {
    serverSelectionTimeoutMS: 5000,    
    autoIndex: false, // Don't build indexes 
    maxPoolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6 
 }).then(() => {
   console.log('MongoDB connected successfully');
 }).catch((err) => {
   console.error('MongoDB connection error: ', err);
 }); 

