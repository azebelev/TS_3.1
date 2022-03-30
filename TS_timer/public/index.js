"use strict";
var btnType;
(function (btnType) {
    btnType["Plus"] = "+";
    btnType["Minus"] = "-";
})(btnType || (btnType = {}));
function sendType(type) {
    var counterPlus = document.querySelector('#counterPlus');
    var counterMinus = document.querySelector('#counterMinus');
    var body = JSON.stringify({ btnType: type });
    fetch('http://localhost:3000/', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: body
    }).then(function (res) { return res.json(); })
        .then(function (response) {
        if (counterMinus) {
            counterMinus.innerHTML = response.counterMinus;
        }
        if (counterPlus) {
            counterPlus.innerHTML = response.counterPlus;
        }
    });
}
