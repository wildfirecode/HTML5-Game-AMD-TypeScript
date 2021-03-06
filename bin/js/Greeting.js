define(["require", "exports", "./getColor", "Laya"], function (require, exports, getColor_1, Laya_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Greeting = (function () {
        function Greeting() {
            var hello = new Laya_1.Text();
            hello.text = 'Hello LayaAir';
            hello.fontSize = 20;
            hello.color = getColor_1.getColor();
            Laya.stage.addChild(hello);
        }
        return Greeting;
    }());
    exports.Greeting = Greeting;
});
