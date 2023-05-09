import renderer from "react-test-renderer";
import NavBar from "../components/NavBar";

describe("NavBar", () => {
  it("should match the snapshot", () => {
    const component = renderer.create(<NavBar />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
