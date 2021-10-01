import reducer, { agregar, eliminar } from "../../reducers/finanzas";

describe("Finanzas Duck", () => {
     
  describe("Action Creators", () => {
    it("agregar", () => {
      const resultado = agregar(1);
      expect(resultado).toEqual({
        type: "AGREGAR",
        payload: 1,
      });
    });

    it("eliminar", () => {
      const resultado = eliminar(1);
      //console.log(resultado);
      expect(resultado).toEqual({
        type: "ELIMINAR",
        index: 1,
      });
    });
  });

  describe("reducer", () => {
    it("AGREGAR", () => {
      const resultado = reducer([1], { type: "AGREGAR", payload: 10 });
      //console.log(resultado);
      // retorna valor concatenado de [...state, action.payload];
      expect(resultado).toEqual([1, 10]);
    });

    it("ELIMINAR", () => {
      const resultado = reducer([1, 2, 3], { type: "ELIMINAR", index: 0 });
      //console.log(resultado);
      // retorna valor restado de "newState.splice(action.index, 1);"
      expect(resultado).toEqual([2, 3]);
    });

    it("default", () => {
      const resultado = reducer([1, 2], { type: "PRUEBA_DEFAULT", index: 0 });
      console.log(resultado);
      // retorna valor restado de "newState.splice(action.index, 1);"
      expect(resultado).toEqual([1, 2]);
    });
  });
});
