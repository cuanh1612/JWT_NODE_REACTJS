"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _homeController = _interopRequireDefault(require("../controller/homeController"));

var router = _express["default"].Router();
/**
 * @param {*} app : express app
 */


var initWebRouters = function initWebRouters(app) {
  router.get("/", _homeController["default"].handleHelloword);
  return app.use("/", router);
};

var _default = initWebRouters;
exports["default"] = _default;