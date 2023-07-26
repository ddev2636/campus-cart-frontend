import {
  TOGGLE_SIDEBAR,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOGOUT_USER,
  DISPLAY_ALERT,
  SELL_ITEM_SUCCESS,
  SELL_ITEM_ERROR,
} from "./action";

import { initialState } from "./appContext";

const reducer = (state, action) => {
  if (action.type === TOGGLE_SIDEBAR) {
    return {
      ...state,
      showSidebar: !state.showSidebar,
    };
  }
  if (action.type === REGISTER_USER_SUCCESS) {
    return {
      ...state,
      user: action.payload.user,
      token: action.payload.token,
      showAlert: true,
      alertType: "success",
      alertText: " Register Successfull! Please Wait ",
    };
  }
  if (action.type === REGISTER_USER_ERROR) {
    return {
      ...state,
    };
  }
  if (action.type === LOGIN_USER_SUCCESS) {
    return {
      ...state,
      user: action.payload.user,
      token: action.payload.token,
      showAlert: true,
      alertType: "success",
      alertText: " Login Successfull! Please Wait ",
    };
  }
  if (action.type === LOGIN_USER_ERROR) {
    return {
      ...state,
    };
  }

  if (action.type === LOGOUT_USER) {
    return {
      ...initialState,
      user: null,
    };
  }

  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: "danger",
      alertText: "please provide all values",
    };
  }

  if (action.type === SELL_ITEM_SUCCESS) {
    return {
      ...state,
      things: action.payload.things,
    };
  }
  if (action.type === SELL_ITEM_ERROR) {
    return {
      ...state,
    };
  }

  throw new Error(`no such action ${action.type}`);
};

export default reducer;
