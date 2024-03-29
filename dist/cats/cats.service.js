"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCat = exports.updatePartialCat = exports.updateCat = exports.addCat = exports.readCat = exports.readAllCat = void 0;
var cats_model_1 = require("./cats.model");
var readAllCat = function (req, res) {
    try {
        var cats = cats_model_1.Cat;
        res.status(200).send({
            success: true,
            data: {
                cats: cats,
            },
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
};
exports.readAllCat = readAllCat;
var readCat = function (req, res) {
    try {
        var params_1 = req.params;
        var cat = cats_model_1.Cat.find(function (v) { return v.id === params_1.id; });
        res.status(200).send({
            success: true,
            data: {
                cat: cat,
            },
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
};
exports.readCat = readCat;
var addCat = function (req, res) {
    try {
        var data = req.body;
        cats_model_1.Cat.push(data);
        res.status(200).send({
            success: true,
            data: data,
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
};
exports.addCat = addCat;
var updateCat = function (req, res) {
    try {
        var params_2 = req.params;
        var _a = req.body, name_1 = _a.name, age = _a.age, species = _a.species, isCute = _a.isCute, friends = _a.friends;
        var index = cats_model_1.Cat.findIndex(function (v) { return v.id === params_2.id; });
        cats_model_1.Cat[index] = __assign(__assign({}, cats_model_1.Cat[index]), { name: name_1, age: age, species: species, isCute: isCute, friends: friends });
        var result = cats_model_1.Cat[index];
        res.status(200).send({
            success: true,
            data: {
                result: result,
            },
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
};
exports.updateCat = updateCat;
var updatePartialCat = function (req, res) {
    try {
        var params_3 = req.params;
        var body = req.body;
        var index = cats_model_1.Cat.findIndex(function (v) { return v.id === params_3.id; });
        cats_model_1.Cat[index] = __assign(__assign({}, cats_model_1.Cat[index]), body);
        var result = cats_model_1.Cat[index];
        res.status(200).send({
            success: true,
            data: {
                result: result,
            },
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
};
exports.updatePartialCat = updatePartialCat;
var deleteCat = function (req, res) {
    try {
        var params_4 = req.params;
        var newCat = cats_model_1.Cat.filter(function (cat) { return cat.id !== params_4.id; });
        res.status(200).send({
            success: true,
            data: { newCat: newCat },
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
};
exports.deleteCat = deleteCat;
//# sourceMappingURL=cats.service.js.map