const mongoose = require("mongoose");

const connectToDataBase = async () => {
    await mongoose.connect(
        `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@fsctaskmanager.hendk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
        () => {
            console.log(`conectado ao db`);
        }
    );
};

module.exports = connectToDataBase;
