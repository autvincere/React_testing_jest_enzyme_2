import { shallow, mount } from "enzyme";
import AppComponent from "../../App";
import { Provider } from "react-redux";
import { createStore } from "redux";

describe("App", () => {
  it("interactua con nuestro store", () => {
    const prevent = jest.fn();
    const reducer = jest.fn().mockReturnValue({
      finanzas: [{ desc: "lala", cant: 150 }],
    });
    const store = createStore(reducer);
    console.log(store.getState());
    
    const wrapper = mount(
      <Provider store={store}>
        <AppComponent />
      </Provider>
    );
    // Simulamos escritura en input #desc
    wrapper
      .find("#desc")
      .simulate("change", { target: { value: "descripcion finanza" } });

    // Simulamos escritura en input #number
    wrapper.find("#number").simulate("change", { target: { value: "300" } });
    // Simulamos envio de formulario por el metodo "submit"
    wrapper.find("form").simulate("submit", { preventDefault: prevent });
    wrapper.find("#enviar").simulate("click");
    wrapper.find("#eliminar").simulate("click");

    const [a, ...rest] = reducer.mock.calls;
    expect(rest).toEqual(
      [
        [ { finanzas: [ { desc: 'lala', cant: 150 } ] }, { type: 'AGREGAR', payload: { desc: 'descripcion finanza', cant: 300 } } ],
        [ { finanzas: [{ desc: 'lala', cant: 150 } ] }, { type: 'ELIMINAR', index: 0 } ]
      ]
    )
    expect(wrapper.text().includes('lala')).toEqual(true)
    expect(wrapper.text().includes('Finanzly')).toEqual(true)
    //console.log(rest[0][0]);
     //console.log(wrapper.debug());
  });
});
