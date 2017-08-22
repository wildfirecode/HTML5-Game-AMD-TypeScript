define("Foo", ["require", "exports", "LayaAdapter"], function (require, exports, LayaAdapter_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Foo = (function () {
        function Foo() {
            var hello = new LayaAdapter_1.Text();
            hello.text = 'Hello LayaAir';
            hello.fontSize = 20;
            hello.color = '#ffffff';
            Laya.stage.addChild(hello);
        }
        return Foo;
    }());
    exports.Foo = Foo;
});
define("GameMain", ["require", "exports", "Foo"], function (require, exports, Foo_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // 程序入口
    var GameMain = (function () {
        function GameMain() {
            Laya.init(600, 400);
            new Foo_1.Foo();
        }
        return GameMain;
    }());
    new GameMain();
});
