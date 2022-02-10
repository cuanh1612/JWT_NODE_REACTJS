"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var homeController = {
  handleHelloword: function handleHelloword(req, res) {
    return res.render('home.ejs');
  }
};
var _default = homeController;
exports["default"] = _default;