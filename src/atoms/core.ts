import { atom } from 'jotai'

export const priceAtom = atom<number>(10)

// 可读原子的泛型是 value 输出的类型
// export declare function atom<Value>(read: Read<Value>): Atom<Value>
export const readonlyPriceAtom = atom<number>((get) => {
  const primitivePrice = get(priceAtom)
  return primitivePrice * 2
})

// 只写原子没有状态值，只有一个更新函数，定义了如何去更新其他原子
// 只写原子的类型是更新函数的参数类型
// export declare function atom<Value, Args extends unknown[], Result>(read: Read<Value, SetAtom<Args, Result>>, write: Write<Args, Result>): WritableAtom<Value, Args, Result>;
// 对于只写原子的泛型： Value 是原子的状态值， Args 是更新函数的参数类型， Result 是更新函数的返回值类型
export const writeOnlyPriceAtom = atom<null, [{type: string, data: number}], void>(
  null,
  (get, set, update: {type: string, data: number}) => {
    // set(priceAtom, price => price + update.data)
    const primitivePrice = get(priceAtom)
    set(priceAtom, primitivePrice + update.data)
  }
)

// 为什么需要 writeOnlyPriceAtom？ 为什么不能直接去更新 priceAtom？

// 这里主要的考量是「方便状态管理」，如果某一次交互需要多个状态更新，则可以将这些更新逻辑封装在一个原子中，而不是在组件中进行多次更新
// 这种情况下，在 writeOnlyPriceAtom 中 需要调用多次的 set 函数
// 所以对于 writeOnlyPriceAtom 来说，如果它回调中只有一个 set 函数，那么可以直接使用某个原子的 atom 更新，但如果有多个 set 函数，那么就需要使用 writeOnlyPriceAtom
// 从而更好的做状态管理


// 即使更新一个 set 函数还使用 writeOnlyAtom 封装：
// - 封装逻辑操作，将逻辑操作封装在一个原子中，方便管理，而不是散落在项目中的各个角落。比如，封装重置购物车的具体逻辑，而不是将这个逻辑散布在使用 cartAtom 的多个地方。
//    这样的好处是你将状态管理更加的模块化，减少代码重复问题

