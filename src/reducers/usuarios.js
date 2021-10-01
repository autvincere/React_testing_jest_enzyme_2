// { name: string, username: string }
const initialState = {
  loading: false,
  success: false,
  data: [],
  error: null,
};

// Action creators
export const fetchUsuariosStart = () => ({
  type: "FETCH_USUARIOS_START",
  error: false,
});

export const fetchUsuariosSuccess = (payload) => ({
  type: "FETCH_USUARIOS_SUCCESS",
  payload,
});

export const fetchUsuariosError = (payload) => ({
  type: "FETCH_USUARIOS_ERROR",
  payload,
  error: true,
});

// Reducer
export default function reducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case "FETCH_USUARIOS_START": {
      return {
        ...state,
        loading: true,
        success: false,
        error: false,
        data: [],
      };
    }
    case "FETCH_USUARIOS_SUCCESS": {
      return {
        ...state,
        loading: false,
        success: true,
        data: action.payload,
        error: false,
      };
    }
    case "FETCH_USUARIOS_ERROR": {
      return {
        ...state,
        loading: false,
        success: false,
        data: [],
        error: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}

export const fetchUsuarios = () => async (dispatch, getState) => {
  dispatch(fetchUsuariosStart());

  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const  data  = await res.json();
    dispatch(fetchUsuariosSuccess(data));
  } catch (error) {
    console.log(error);
    dispatch(fetchUsuariosError(error));
  }
};
