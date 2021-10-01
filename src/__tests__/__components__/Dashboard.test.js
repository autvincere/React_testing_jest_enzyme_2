import { shallow, mount, configure } from "enzyme";
import DashboardComponent from "../../components/Dashboard";


const startWrapper = (props = "") => <DashboardComponent {...{ props }} />;

describe("Dashboard", () => {
  it("muestra valor ", () => {
    const valor = 1000;
    //const wrapper = shallow(startWrapper(...valor))
    const wrapper = shallow(<DashboardComponent valor={10} />);
    const value = wrapper.find("strong").text();
    // console.log(wrapper.find("strong").text());
    expect(value).toBeTruthy();
    expect(value).toBe('number');
    //expect(value).toBe(10)
     // expect(typeof value).toBe('number');
  });
});
