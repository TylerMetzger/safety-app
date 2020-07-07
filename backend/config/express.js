const configUtil = require("./configUtil.js");
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");
require('dotenv').config();

const protestRoutes = require("../routes/ProtestRoutes.js")

module.exports.init = () => {
    mongoose.connect(configUtil.getDbUri());

    /************ Fixing Depreciation: ************/
    mongoose.set('useNewUrlParser', true);
    mongoose.set('useFindAndModify', false);
    mongoose.set('useCreateIndex', true);
    mongoose.set('useUnifiedTopology', true);
    /**********************************************/

    const app = express();

    app.use(morgan("dev"));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(cors());

    /****** Place Routes Here: ******/
    app.use("/protest", protestRoutes);

    /********************************/

    if (process.env.NODE_ENV === "production") {
        // Serve any static files
        app.use(express.static(path.join(__dirname, "../../frontend/build")));
        // Handle React routing, return all requests to React app
        app.get("*", function (req, res) {
            res.sendFile(path.join(__dirname, "../../frontend/build", "index.html"));
        });
    }

    return app;
};