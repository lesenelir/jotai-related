# jotai-related

核心： jotai 只是去把 useState 进行集成，从而使得 state 可以全局访问，即在全局不同的组件可以拿到同一个状态值。

如果把 jotai 依赖关系当作一个有向图，那么 primitive atom 原生原子就是顶层的节点，derived atom 派生原子就是指向 primitive atom 的节点，selector 选择器就是指向 derived atom 的节点。

当 primitive atom 的值发生变化时，会通知所有依赖于它的 derived atom 和 selector，这些节点会重新计算自己的值，然后通知依赖于它们的节点，这样一层层地传递下去，直到所有节点都计算完毕。

对于 derived atom，分为：read-only derived atom 和 writeable derived atom。

read-only derived atom:
 - 通过 `get` 方法获取值， `get` 用于订阅某种依赖关系
 - 本身值不能修改，只能靠依赖的原子的值变化来触发重新计算，所以不能通过 `useSetAtom` 来使用

writeable derived atom:
- 本身不存在状态值，主要用于做一些状态管理
- 通过 `set` 方法设置值， `set` 用于触发某种依赖关系
- 本身值可以修改，可以通过 `useSetAtom` 来使用



