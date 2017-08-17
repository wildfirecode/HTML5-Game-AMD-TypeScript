import { Foo } from './Foo';
// 程序入口
class GameMain {
    constructor() {
        Laya.init(600, 400);
        new Foo();
    }
}

new GameMain();