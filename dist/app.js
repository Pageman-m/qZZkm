define("app", ["require", "exports", "express"], function (require, exports, express) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var app = express();
    function sayHello(name) {
        return 'Hello' + name;
    }
    var myName = 'Weigo';
    console.log(sayHello(myName));
});
//# sourceMappingURL=app.js.map