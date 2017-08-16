# 在基于TypeScript的LayaAir HTML5游戏开发中使用AMD

## AMD
AMD是"Asynchronous Module Definition"的缩写，意思就是"异步模块定义"。这是目前最流行的JavaScript/TypeScript代码的管理方式。本文介绍了如何在基于TypeScript的LayaAir HTML5游戏开发中使用AMD来组织代码。本文末尾的参考资料列表中包含了更多关于AMD的信息。

## 示例项目
示例项目源码从这里下载[https://github.com/wildfirecode/HTML5-Game-AMD-TypeScript][demo].

## 创建项目
依然使用LayaIDE来创建项目，因为要使用LayaAir引擎的库文件。

## 使用Visual Studio Code作为编码调试环境
为了能够对index.html有绝对的控制权，我们不能再使用LayaIDE来编译项目。另外，为了在VSCode中能够编译和调试项目，我们需要添加一些额外的配置。
- 复制示例项目中的`.vscode`文件夹到自己项目的根目录。
- 在index.html文件中引入所有游戏代码的编译文件
    ```html
    <script src="./js/game.js"></script>
    ```
- 在index.html文件中实例化游戏入口类。
    ```html
    <script>
        require(['GameMain'], function (GameMain) {
            new GameMain.default()
        });
	</script>
    ```
- 增加LayaAir引擎适配模块`adapter.ts`，每一个LayaAir的类都要增加一个适配。比如`Laya.EventDispatcher`:
    ```ts
    export const EventDispatcher = Laya.EventDispatcher;
    ```
- 使用示例项目中的`tsconfig.json`覆盖原来的`tsconfig.json`文件。

## 编译和调试
编译使用快捷键`Ctrl+Shift+B`，调试使用`F5`,过程基本和LayaAir相同。更多信息参考VSCode官方文档。

## requirejs
从requirejs官方下载库文件，目前的最新版本是2.3.4，这是下载链接[http://requirejs.org/docs/release/2.3.4/minified/require.js][lib]。把下载的库文件放入`./bin`目录，并且在index.html增加文件引用，具体参见示例项目。

## 插件推荐
为了能够自动import，需要下载额外的VSCode插件，这里是插件地址 [https://marketplace.visualstudio.com/items?itemName=rbbit.typescript-hero][autoimport]。

## 参考
- [Javascript模块化编程(1)][js1]
- [Javascript模块化编程(2)][js2]
- [Javascript模块化编程(3)][js3]

[js1]: http://www.ruanyifeng.com/blog/2012/10/javascript_module.html
[js2]: http://www.ruanyifeng.com/blog/2012/10/asynchronous_module_definition.html
[js3]: http://www.ruanyifeng.com/blog/2012/11/require_js.html
[lib]: http://requirejs.org/docs/release/2.3.4/minified/require.js
[demo]: https://github.com/wildfirecode/HTML5-Game-AMD-TypeScript
[autoimport]: https://marketplace.visualstudio.com/items?itemName=rbbit.typescript-hero
