import renderer from "react-test-renderer";
import Link from "../Link";

it("changes the class when hovered", () => {
  const component = renderer.create(
    <Link page="http://www.facebook.com">Facebook</Link>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  //   exports[`changes the class when hovered 1`] = `
  // <a
  //   className="normal"
  //   href="http://www.facebook.com"
  //   onMouseEnter={[Function]}
  //   onMouseLeave={[Function]}
  // >
  //   Facebook
  // </a>
  // `;

  // manually trigger the callback
  renderer.act(() => {
    tree.props.onMouseEnter();
  });
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  //   exports[`changes the class when hovered 2`] = `
  // <a
  //   className="hovered"
  //   href="http://www.facebook.com"
  //   onMouseEnter={[Function]}
  //   onMouseLeave={[Function]}
  // >
  //   Facebook
  // </a>
  // `;

  // manually trigger the callback
  renderer.act(() => {
    tree.props.onMouseLeave();
  });
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  //   exports[`changes the class when hovered 3`] = `
  // <a
  //   className="normal"
  //   href="http://www.facebook.com"
  //   onMouseEnter={[Function]}
  //   onMouseLeave={[Function]}
  // >
  //   Facebook
  // </a>
});

// 変わる値
it("will check the matchers and pass", () => {
  const user = {
    createdAt: new Date(),
    id: Math.floor(Math.random() * 20),
    name: "LeBron James",
  };

  expect(user).toMatchSnapshot({
    createdAt: expect.any(Date),
    id: expect.any(Number),
  });
});

// // Snapshot
// exports[`will check the matchers and pass 1`] = `
// Object {
//   "createdAt": Any<Date>,
//   "id": Any<Number>,
//   "name": "LeBron James",
// }
// `;

it("will check the values and pass", () => {
  const user = {
    createdAt: new Date(),
    name: "Bond... James Bond",
  };

  expect(user).toMatchSnapshot({
    createdAt: expect.any(Date),
    name: "Bond... James Bond",
  });
});

// // Snapshot
// exports[`will check the values and pass 1`] = `
// Object {
//   "createdAt": Any<Date>,
//   "name": 'Bond... James Bond',
// }
// `;
