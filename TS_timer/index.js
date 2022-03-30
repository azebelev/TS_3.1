"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
var counterPlus = 0;
var counterMinus = 0;
app.use(express_1.default.static('public'));
app.use(express_1.default.json());
app.post('/', function (req, res) {
    var Btype;
    (function (Btype) {
        Btype["Plus"] = "+";
        Btype["Minus"] = "-";
    })(Btype || (Btype = {}));
    var btnType = req.body.btnType;
    (btnType === Btype.Plus) ? counterPlus++ : counterMinus++;
    res.send({ counterPlus: counterPlus, counterMinus: counterMinus });
});
app.listen(3000, function () {
    console.log("serving on port : " + 3000);
});
