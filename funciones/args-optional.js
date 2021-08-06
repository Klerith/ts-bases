"use strict";
(function () {
    var fullName = function (firstName, lastName) {
        return firstName + " " + (lastName || '----');
    };
    var name = fullName('Tony');
    console.log({ name: name });
})();
