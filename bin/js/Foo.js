define(["require", "exports", "./Laya"], function (require, exports, Laya_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Foo = (function () {
        function Foo() {
            var hello = new Laya_1.Text();
            hello.text = 'Hello LayaAir';
            hello.fontSize = 20;
            hello.color = '#ffffff';
            Laya.stage.addChild(hello);
        }
        return Foo;
    }());
    exports.Foo = Foo;
});
