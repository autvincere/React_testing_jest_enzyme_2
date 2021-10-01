import { shallow, mount, configure } from "enzyme";
import FinanzasComponent from "../../components/Finanzas";

// Props
const eliminarFinanza = jest.fn();
const finanzas = [
  { desc: "descripcion1", cant: 1 },
  { desc: "descripcion2", cant: 2 },
];

describe("Finanzas Component", () => {
  it("funcion eliminarFinanza", () => {
    const wrapper = shallow(
      <FinanzasComponent {...{ finanzas, eliminarFinanza }} />
    );

    wrapper.find("button").at(1).simulate("click");
    // se espera el valor que envia la funcion que en este caso es el index 1
    expect(eliminarFinanza.mock.calls).toEqual([[1]]);
    // console.log(eliminarFinanza.mock.calls);

    const resultado1 = wrapper.text().includes("descripcion1");
    const resultado2 = wrapper.text().includes("descripcion2");
    expect(resultado1).toEqual(true);
    expect(resultado2).toEqual(true);

    //console.log( wrapper.text().includes('descripcion1'));
  });
});
