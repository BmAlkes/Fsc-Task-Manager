const mongose = require("mongoose");

const connectToDataBase = async () => {
    await mongose.connect(
        `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@fsctaskmanager.hendk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
        () => console.log(" connect to mongodb")
    );
};

module.exports = connectToDataBase;
