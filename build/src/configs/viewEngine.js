"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

/**
 * - express app
 */
var configViewEngine = function configViewEngine(app) {
  app.use(_express["default"]["static"]('../public'));
  app.set("view engine", "ejs");
  app.set("views", "../views");
};

var _default = configViewEngine;
exports["default"] = _default;