import { fetchUsuarios } from "../../reducers/usuarios";

describe("Duck usuarios", () => {
  describe("fetchUsuarios", () => {
    test("Maneja caso de exito", async () => {
      const dispatch = jest.fn();
      const getState = jest.fn();
      const fetch = jest.fn().mockResolvedValue({
        data: 1,
      });

      global.fetch = jest.fn(() =>
        Promise.resolve({
          // payload
          json: () => Promise.resolve(1),
        })
      );

      await fetchUsuarios()(dispatch);
      // console.log(dispatch.mock.calls);
      expect(dispatch.mock.calls).toEqual([
        [{ type: "FETCH_USUARIOS_START", error: false }],
        [{ type: "FETCH_USUARIOS_SUCCESS", payload: 1 }],
      ]);
    });
    test("caso Error ", async () => {
      const dispatch = jest.fn();
      const getState = jest.fn();
      const fetch = jest.fn().mockResolvedValue({
        data: 1,
      });

      global.fetch = jest.fn(() =>
        Promise.resolve({
          // payload
          json: () => Promise.reject(1),
        })
      );

      await fetchUsuarios()(dispatch);
      // console.log(dispatch.mock.calls);
      expect(dispatch.mock.calls).toEqual([
        [{ type: "FETCH_USUARIOS_START", error: false }],
        [{ type: "FETCH_USUARIOS_ERROR", payload: 1, error: true }],
      ]);
    });
  });
});
