define(["require", "exports", "./getColor", "LayaAdapter"], function (require, exports, getColor_1, LayaAdapter_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Foo = (function () {
        function Foo() {
            var hello = new LayaAdapter_1.Text();
            hello.text = 'Hello LayaAir';
            hello.fontSize = 20;
            hello.color = getColor_1.getColor();
            Laya.stage.addChild(hello);
        }
        return Foo;
    }());
    exports.Foo = Foo;
});
