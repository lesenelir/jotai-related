# jotai-related

jotai 的核心是原子，原子是状态的最小单元，原子之间可以有依赖关系，原子的状态是全局的，可以在任何地方访问

核心： jotai 只是去把 useState 进行集成，从而使得 state 可以全局访问，即在全局不同的组件可以拿到同一个状态值。

如果把 jotai 依赖关系当作一个有向图，那么 primitive atom 原生原子就是顶层的节点，derived atom 派生原子就是指向 primitive atom 的节点，selector 选择器就是指向 derived atom 的节点。

当 primitive atom 的值发生变化时，会通知所有依赖于它的 derived atom 和 selector，这些节点会重新计算自己的值，然后通知依赖于它们的节点，这样一层层地传递下去，直到所有节点都计算完毕。

对于 derived atom，分为：read-only derived atom 和 writeable derived atom。

read-only derived atom:
 - 通过 `get` 方法获取值， `get` 用于订阅某种依赖关系
 - 本身值不能修改，只能靠依赖的原子的值变化来触发重新计算，所以不能通过 `useSetAtom` 来使用

writeable derived atom:
- 本身不存在状态值，主要用于做一些状态管理，定义如何去更新其他原子
- 通过 `set` 方法设置值， `set` 用于触发某种依赖关系
- 本身值可以修改，可以通过 `useSetAtom` 来使用

// -------------------

路径：
document -> provider -> core -> login project -> fetch -> query -> my-atom-pages dark -> my-atom-pages light -> my-atom-pages ownAtom


// -------------------

一开始原子是没有状态的，只有当原子和 `useAtom` 或者 `useAtomValue` 或者 `useUpdateAtom` 之类的 hook 绑定之后，原子才会有状态。
这里面的归根结底是因为 jotai 中，是通过 EventEmitter 来实现状态的订阅和发布的，所以只有当有订阅者的时候，状态才会被创建。


// -------------------

Provider 会创建一个新的 context，所以对于同一个 atom 在不同的 Provider 中，countAtom 是不同的

为每个子树提供不同的状态，provider 允许在不同的组件树中隔离状态，起到作用域隔离的作用

应用中有多个 Provider 可以管理不同的状态部分，可以让组件的管理更加清晰


// -------------------

jotai 这个库你写好，可以把代码写成艺术品的


// -------------------

关于 login jotai 模块的使用，偏向实践


// -------------------

可以把数据请求放入 atom 内。

