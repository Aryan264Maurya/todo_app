import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect("mongodb://localhost:27017", {
      dbName: "backendapi",
    })
    .then((c) => console.log(`Database Connected with ${c.connection.host}`))
    .catch((e) => console.log(e));
};


// Replace '<your-mongodb-uri>' with your actual MongoDB connection URI
// const uri = '<your-mongodb-uri>';

// mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log('Connected to MongoDB');
//   })
//   .catch((error) => {
//     console.error('Error connecting to MongoDB:', error.message);
//   });
