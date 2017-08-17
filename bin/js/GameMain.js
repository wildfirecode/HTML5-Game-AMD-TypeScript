define(["require", "exports", "./Foo"], function (require, exports, Foo_1) {
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
