"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _viewEngine = _interopRequireDefault(require("./configs/viewEngine"));

var _web = _interopRequireDefault(require("./routes/web"));

var app = (0, _express["default"])();
var PORT = process.env.PORT || 3000; //Config view engine

(0, _viewEngine["default"])(app); //Init web router

(0, _web["default"])(app);
app.listen(PORT, function () {
  console.log("App listen at http://localhost:".concat(PORT));
});