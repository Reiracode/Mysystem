// define inital state,and return new state
let userno = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser")).userno
  : "";

let dep = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser")).dep
  : "";

let IsLogin = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser")).IsLogin
  : "";

export const initialState = {
  userno: "" || userno,
  IsLogin: false || IsLogin,
  loading: false,
  errorMessage: null,
  dep: "" || dep,
};

export const AuthReducer = (initialState, action) => {
  switch (action.type) {
    case "REQUEST_LOGIN":
      return {
        ...initialState,
        loading: true,
      };
    case "LOGIN_SUCCESS":
      return {
        ...initialState,
        userno: action.payload.userno,
        dep: action.payload.dep,
        IsLogin: action.payload.IsLogin,
        loading: false,
        token: action.payload.token
      };
    case "LOGOUT":
      return {
        ...initialState,
        user: "",
        IsLogin: false,
      };
    case "LOGIN_ERROR":
      return {
        ...initialState,
        loading: false,
        errorMessage: action.error,
      };
    
    
    
    case "REQUEST_CREATE":
      return {
        ...initialState,
        loading: true,
      };
    case "CREATE_SUCCESS":
      return {
        ...initialState,
        userno: action.payload.userno,
        dep: action.payload.dep,
        IsLogin: true,
        loading: true,
      };
    case "CREATE_ERROR":
      return {
        ...initialState,
        loading: false,
        errorMessage: action.error,
      };
    
    
    
    
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
