function forEach(items, callback) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}

test("use mock function", () => {
  const mockCallback = jest.fn((x) => 42 + x);
  forEach([5, 10, 15], mockCallback);

  // 関数の呼ばれた回数
  expect(mockCallback.mock.calls.length).toBe(3);

  // 一回目に呼び出された値
  expect(mockCallback.mock.calls[0][0]).toBe(5);

  // 二回目に呼び出された値
  expect(mockCallback.mock.calls[1][0]).toBe(10);

  // 一回目の数値の値
  expect(mockCallback.mock.results[0].value).toBe(47);

  // 二回目の数値の値
  expect(mockCallback.mock.results[1].value).toBe(52);
  console.log(mockCallback.mock);
});

// すべてのモック関数には、この特別な .mock プロパティがあり、モック関数呼び出し時のデータと、関数の返り値が記録されています。
//  .mock プロパティには、各呼び出し時の thisの値も記録されているため、this の値のチェックも可能です。

// const myMock1 = jest.fn();

// // インスタンス化します。
// const a = new myMock1();
// console.log(myMock1.mock.instances);
// // > [ <a> ]

// const myMock2 = jest.fn();
// const b = {};
// const bound = myMock2.bind(b);
// bound();
// console.log(myMock2.mock.contexts);
// // > [ <b> ]

// 以下のモックのプロパティを使用すると、関数がどのように呼び出され、
// どのようにインスタンス化され、返り値が何であったのかを確認することができます。

// // The function was called exactly once
// expect(someMockFunction.mock.calls.length).toBe(1);

// // The first arg of the first call to the function was 'first arg'
// expect(someMockFunction.mock.calls[0][0]).toBe('first arg');

// // The second arg of the first call to the function was 'second arg'
// expect(someMockFunction.mock.calls[0][1]).toBe('second arg');

// // The return value of the first call to the function was 'return value'
// expect(someMockFunction.mock.results[0].value).toBe('return value');

// // The function was called with a certain `this` context: the `element` object.
// expect(someMockFunction.mock.contexts[0]).toBe(element);

// // This function was instantiated exactly twice
// expect(someMockFunction.mock.instances.length).toBe(2);

// // The object returned by the first instantiation of this function
// // had a `name` property whose value was set to 'test'
// expect(someMockFunction.mock.instances[0].name).toEqual('test');

// // The first argument of the last call to the function was 'test'
// expect(someMockFunction.mock.lastCall[0]).toBe('test');
