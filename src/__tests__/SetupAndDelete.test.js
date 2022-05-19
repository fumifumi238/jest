let database = [];

const initializeCityDatabase = () => {
  database.push("Vienna", "San Juan");
};

const clearCityDatabase = () => {
  database.length = 0;
};

const isCity = (city) => {
  if (database.indexOf(city) !== -1) {
    return true;
  }

  return false;
};

// 多くのテストで繰り返し行う必要がある場合は、beforeEach と afterEach を使用します。

// たとえば、いくつかのテストが City のデータベースと関係するとしましょう。
// そしてこれらのテストの前に initializeCityDatabase() を呼び出す必要があり、
// テストの後にはclearCityDatabase() を呼び出す必要があるとします。 その場合、以下のようにできます:

// テストの前
beforeEach(() => {
  initializeCityDatabase();
});

// テスト後
afterEach(() => {
  clearCityDatabase();
});

test("city database has Vienna", () => {
  expect(isCity("Vienna")).toBeTruthy();
});

test("city database has San Juan", () => {
  expect(isCity("San Juan")).toBeTruthy();
});

describe("matching cities to foods", () => {
  // Applies only to tests in this describe block
  let foodDatabase = {};
  const initializeFoodDatabase = () => {
    foodDatabase = { Vienna: "Wiener Schnitzel", "San Juan": "Mofongo" };
  };
  const isValidCityFoodPair = (key, value) => {
    if (foodDatabase[key] === value) {
      return true;
    }

    return false;
  };
  beforeEach(() => {
    return initializeFoodDatabase();
  });

  test("Vienna <3 veal", () => {
    expect(isValidCityFoodPair("Vienna", "Wiener Schnitzel")).toBe(true);
  });

  test("San Juan <3 plantains", () => {
    expect(isValidCityFoodPair("San Juan", "Mofongo")).toBe(true);
  });
});

// もしテストが失敗して、まず最初に調べるべきことの一つはそのテストが単体で実行された場合にも失敗するかどうかということです。
// Jest で一度だけテストを実行するには、 test コマンドを test.only に一時的に変更します。

// test.only("this will be the only test that runs", () => {
//   expect(true).toBe(true);
// });

// test("this test will not run", () => {
//   expect("A").toBe("A");
// });
