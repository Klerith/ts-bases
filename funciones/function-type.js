"use strict";
(function () {
    var addNumbers = function (a, b) { return a + b; };
    var greet = function (name) { return "Hola " + name; };
    var saveTheWorld = function () { return "El mundo est\u00E1 salvado!"; };
    var myFunction;
    //* myFunction = 10;
    //* console.log(myFunction)
    // myFunction = addNumbers
    // console.log( myFunction(1, 2) )
    //? myFunction = greet
    //? console.log( myFunction( 'Fernando' ) )
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
