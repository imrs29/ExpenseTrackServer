const mongoose = require("mongoose");

//PHdv72KRoI8EGCV6
//mongodb+srv://me:<password>@expenses-tracker.bn2za.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`DB connected Successfully`);
  } catch (error) {
    console.log(`Error ${error.message}`);
  }
};

module.exports = dbConnect;
