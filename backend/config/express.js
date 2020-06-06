const configUtil = require("./configUtil");
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

module.exports.init = () => {
    mongoose.connect(configUtil.getDbUri());

    // Fix some depreciation warnings ////////
    mongoose.set('useNewUrlParser', true);
    mongoose.set('useFindAndModify', false);
    mongoose.set('useCreateIndex', true);
    mongoose.set('useUnifiedTopology', true);
    //////////////////////////////////////////

    const app = express();

    app.use(morgan("dev"));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(cors());

    /***** Place Routes Here: *****
    app.use("/route", routeName);
    *******************************/

    return app;
};