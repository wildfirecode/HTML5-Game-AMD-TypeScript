# 借助AMD来解决HTML5游戏开发中的痛点

## 游戏开发的痛点
现在，基于国内流行引擎（LayaAir和Egret）和TypeScript的HTML5游戏开发有诸多痛点：
- 未采用TypeScript编译器的增量编译模式导致无法达到极致的编译效率，进而编码、运行、调试循环不流畅。
- 代码的组织方式是使用namespace，为了减少代码长度和提高代码输入的效率，一般使用import来创建别名，但是工具流不支持自动的import或者import检查。手动去写import降低了编码的效率。
- 使用namespace来管理代码会遇到模块执行顺序无法控制的问题，有些引擎会使用扩展的TypeScript编译器来解决，这增加了额外的编译器维护的工作量。其实是没有必要的。比如egret使用了[typescript-plus][tsplus]。再比如，在LayaAir的工作流中，官方引入了第三方的ts处理逻辑。这个算法的时间消耗是随代码的增多线性上升的。
- 使用namespace带来一个额外的工作量，就是为了加载开发者的代码要创建和维护开着的模块文件列表，这也是没有必要的。而且在开发阶段，游戏打开时候每个模块都要单独加载，也就说每个模块都要产生一个http请求，这会降低游戏打开的速度。可以想象，随着项目的规模逐渐增长，游戏打开的速度会越来越慢。

## AMD
![](http://images2017.cnblogs.com/blog/1178277/201708/1178277-20170817164851271-1013621086.png)
AMD是"Asynchronous Module Definition"的缩写，意思就是"异步模块定义"。这是目前最流行的JavaScript/TypeScript代码的管理方式。本文末尾的参考资料列表中包含了更多关于AMD的信息。AMD可以帮助我们解决以上的一些问题：
- 在VS Code中，我们可以使用现有的流行插件来实现自动的import，提高编码效率。
- AMD可以自动管理模块之间的依赖。AMD为此而生。

## ts编译配置
![](http://images2017.cnblogs.com/blog/1178277/201708/1178277-20170817164902553-2033981522.jpg)
- ts的watch模式使用了增量编译，只有修改的模块才会被编译，这样零秒编译才得以实现。
- 使用outFile来自动合并所有的模块文件，这是tsc已有的功能，我们没有必要再重复造轮子。而且合并文件会把开发者模块的http请求合并成一个，这可以提高开发阶段游戏打开的速度。

## 示例项目
下面以LayaAir引擎作为示例来讲解，源码从这里下载[https://github.com/wildfirecode/HTML5-Game-AMD-TypeScript][demo].

## 创建项目
依然使用LayaIDE来创建项目，因为要使用LayaAir引擎的库文件。

## requirejs
从requirejs官方下载库文件，目前的最新版本是2.3.4，这是下载链接[http://requirejs.org/docs/release/2.3.4/minified/require.js][lib]。把下载的库文件放入`./bin`目录，并且在index.html增加文件引用以及游戏入口模块的启动。
```html
<script data-main="js/GameMain" src="./require.js" defer async="true"></script>
```

## 适配AMD
增加LayaAir引擎适配模块`adapter.ts`，每一个LayaAir的类都要增加一个适配。比如`Laya.EventDispatcher`:
```ts
export const EventDispatcher = Laya.EventDispatcher;
```

## 更改ts编译配置
使用示例项目中的`tsconfig.json`覆盖原来的`tsconfig.json`文件。这样我们就可以使用tsc watch模式实现极速编译，而且还可以把开发者的所有模块文件合并为一个文件。

## 使用Visual Studio Code作为编码调试环境
为了方便控制index.html，建议使用VS Code来编译项目。另外，为了在VS Code中能够编译和调试项目，我们需要复制示例项目中的`.vscode`文件夹到自己项目的根目录。 编译使用快捷键`Ctrl+Shift+B`，调试使用`F5`,过程基本和LayaAir相同。更多信息参考VSCode官方文档。

## 插件推荐
为了能够自动import，需要下载额外的VSCode插件，这里是插件地址 [https://marketplace.visualstudio.com/items?itemName=rbbit.typescript-hero][autoimport]。

## 参考
- [Javascript模块化编程(1)][js1]
- [Javascript模块化编程(2)][js2]
- [Javascript模块化编程(3)][js3]
- [requirejs][lib]
- [TypeScript Hero][autoimport]
- [TypeScript Compiler Options][tsconfig]

[js1]: http://www.ruanyifeng.com/blog/2012/10/javascript_module.html
[js2]: http://www.ruanyifeng.com/blog/2012/10/asynchronous_module_definition.html
[js3]: http://www.ruanyifeng.com/blog/2012/11/require_js.html
[lib]: http://requirejs.org/docs/release/2.3.4/minified/require.js
[demo]: https://github.com/wildfirecode/HTML5-Game-AMD-TypeScript
[autoimport]: https://marketplace.visualstudio.com/items?itemName=rbbit.typescript-hero
[tsplus]:https://github.com/domchen/typescript-plus
[tsconfig]:http://www.typescriptlang.org/docs/handbook/compiler-options.html
