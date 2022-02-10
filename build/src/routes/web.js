"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var router = _express["default"].Router();
/**
 * @param {*} app : express app
 */


var initWebRouters = function initWebRouters(app) {
  router.get("/", function (req, res) {
    return res.send('Hello world cua anh ne');
  });
  return app.use("/", router);
};

var _default = initWebRouters;
exports["default"] = _default;