"use strict";
exports.__esModule = true;
var dotenv = require("dotenv");
dotenv.config();
var config = {
    ODATAURL: process.env.URL
};
exports["default"] = config;
