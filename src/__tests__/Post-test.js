import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Post from "../Post";
Enzyme.configure({ adapter: new Adapter() });

// Domのテスト
it("post test", () => {
  // Render a checkbox with label in the document
  const post = shallow(<Post name={"Tanaka"} />);
  expect(post.find("#name").text()).toEqual("Tanaka");
});
