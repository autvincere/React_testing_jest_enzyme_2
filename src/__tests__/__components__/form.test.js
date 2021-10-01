import React from "react";
import { shallow, mount, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import FormComponent from "../../components/Form";

configure({ adapter: new Adapter() });

const agregarFinanza = jest.fn();
const prevent = jest.fn();
const startWrapper = (props = "") => <FormComponent {...{ props }} />;

describe("Render Form", () => {
  it("agregar Finanza ", () => {
    // Se carga componente sin hijos(shallow)
     const wrapper = shallow(<FormComponent{...{ agregarFinanza }}/>);
     // const wrapper = shallow(startWrapper(agregarFinanza = {agregarFinanza}));
    //console.log(wrapper.debug());

    // Simulamos escritura en input #desc
    wrapper
      .find("#desc")
      .simulate("change", { target: { value: "descripcion" } });

    // Simulamos escritura en input #number
    wrapper.find("#number").simulate("change", { target: { value: "150" } });

    // Simulamos envio de formulario por el metodo "submit"
    wrapper.find("form").simulate("submit", { preventDefault: prevent });

    // Resultado
    // La cantidad de veces que se ejecuta ".mock.calls" se representa por el primer[], luego viene el contenido (un array con un objeto)
    expect(agregarFinanza.mock.calls).toEqual([
      [{ desc: "descripcion", cant: 150 }],
    ]);

    expect(prevent.mock.calls).toEqual([[]]);
    //console.log(agregarFinanza.mock.calls);
  });
});
