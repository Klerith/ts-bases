"use strict";
(function () {
    var error = function (message) {
        if (false) {
            throw new Error(message);
        }
        return 1;
    };
    error('Auxilio!');
    console.log('Hola Mundo');
})();
