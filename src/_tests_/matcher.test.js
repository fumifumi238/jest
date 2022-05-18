// toBe は Object.is を使用して厳密な等価性をテストします。
test("two plus two is four", () => {
  expect(2 + 2).toBe(4);
  expect(2 + 2).not.toBe(0);
});

// オブジェクトの値を確認する場合は、代わりに toEqual を使用します。
// toEqual は、オブジェクトまたは配列のすべてのフィールドを再帰的にチェックします。

test("object assignment", () => {
  const data = { one: 1 };
  data["two"] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

// toBeNull は null のみ一致します
// toBeUndefined は undefined のみ一致します
// toBeDefined は toBeUndefined の反対です
// toBeTruthy は if ステートメントが真であるとみなすものに一致します
// toBeFalsy は if ステートメントが偽であるとみなすものに一致します

test("null", () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test("zero", () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

// 数値の比較するほとんどの方法について、対応するマッチャーがあります。
test("two plus two", () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);
});

// わずかな丸め誤差にテストを依存させたくないでしょうから、
// 浮動小数点の値が同一であるかを確認するにはtoEqualの代わりにtoBeCloseTo を使用して下さい。

test("adding floating point numbers", () => {
  const value = 0.1 + 0.2;
  //expect(value).toBe(0.3);         このように書くと、丸め込み誤差が原因で期待通りに動作しない
  expect(value).toBeCloseTo(0.3); // これならば正しく動く
});

// toMatch で、文字列に対して正規表現でマッチするか確認できます。
test("there is no I in team", () => {
  expect("team").not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
  expect("Christoph").toMatch(/stop/);
});

// toContain を使用して、配列や反復可能なオブジェクトに特定のアイテムが含まれているかどうかを確認できます。

const shoppingList = [
  "diapers",
  "kleenex",
  "trash bags",
  "paper towels",
  "milk",
];

test("the shopping list has milk on it", () => {
  expect(shoppingList).toContain("milk");
  expect(new Set(shoppingList)).toContain("milk");
});

// ある関数が呼び出し時に例外を投げることをテストするには、 toThrow を使用します。

function compileAndroidCode() {
  throw new Error("you are using the wrong JDK");
}

test("compiling android goes as expected", () => {
  expect(() => compileAndroidCode()).toThrow();
  expect(() => compileAndroidCode()).toThrow(Error);

  // You can also use the exact error message or a regexp
  expect(() => compileAndroidCode()).toThrow("you are using the wrong JDK");
  expect(() => compileAndroidCode()).toThrow(/JDK/);
});
