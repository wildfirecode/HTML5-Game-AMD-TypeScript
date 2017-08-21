import { Text } from './Laya';
export class Foo {
    constructor() {
        const hello = new Text();
        hello.text = 'Hello LayaAir';
        hello.fontSize = 20;
        hello.color = '#ffffff';
        Laya.stage.addChild(hello);
    }
}
