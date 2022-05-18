// テストからpromiseを返すと、Jestはそのpromiseがresolveされるまで待機します。 promiseがrejectされると、テストが失敗します。

// 例えば、fetchDataが'peanut butter'という文字列でresolveされるpromiseを返すとします。 以下のようにテストすることができます:

test("the data is peanut butter", () => {
  const fetchData = () =>
    new Promise((resolve, reject) =>
      setTimeout(() => {
        resolve("peanut butter");
      }, 300)
    );
  return fetchData().then((data) => {
    expect(data).toBe("peanut butter");
  });
});

// また、async と awaitをテストで使用できます。
// 非同期テストを書くには、 testに渡す関数の前にasync キーワードを記述するだけです。
// 例えば、同じfetchData シナリオは次のようにテストできます:

// test("the data is peanut butter", async () => {
//   const data = await fetchData();
//   expect(data).toBe("peanut butter");
// });

// promiseがrejectされることを期待するケースでは
// .catch メソッドを使用してください。
//  想定した数のアサーションが呼ばれたことを確認するため、expect.assertionsを必ず追加して下さい。

// test("the fetch fails with an error", () => {
//   expect.assertions(1);
//   return fetchData().catch((e) => expect(e).toMatch("error"));
// });

// 問題はfetchDataが完了した時点でテストも完了してしまい、コールバックが呼ばれないことです。

// これを修正する別の形のtest があります。 テストを空の引数の関数の中に記述するのではなく、
// doneという１つの引数を利用します。 Jestは テストを終了する前に、done コールバックが呼ばれるまで待ちます。

test("the data is peanut butter2", (done) => {
  function callback(error, data) {
    if (error) {
      // callbackが呼ばれるまで待つ。
      done(error);
      return;
    }
    try {
      expect(data).toBe("peanut butter");
      done();
    } catch (error) {
      done(error);
    }
  }
  const fetchData = (callback) => {
    callback(null, "peanut butter");
  };
  fetchData(callback);
});
