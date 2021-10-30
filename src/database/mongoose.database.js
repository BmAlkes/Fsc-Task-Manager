const mongoose = require("mongoose");

const connectToDataBase = async () => {
    await mongoose.connect(
        `mongodb+srv://bmalkes:${process.env.DB_USERNAME}@fsctaskmanager.hendk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
        () => console.log(" connect to mongodb acesso aceito")
    );
};

module.exports = connectToDataBase;
