import React, { useReducer, useContext, useState, useEffect } from "react";
import reducer from "./reducer.js";
import axios from "axios";
import { TOGGLE_SIDEBAR } from "./action.js";

import {
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOGOUT_USER,
  DISPLAY_ALERT,
  SELL_ITEM_SUCCESS,
  SELL_ITEM_ERROR,
} from "./action";

const user = localStorage.getItem("user");

const initialState = {
  isLoading: false,
  showSidebar: false,
  user: user ? JSON.parse(user) : null,
  showAlert: false,
  alertText: "",
  alertType: "",
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [item, setItem] = useState("");
  const [cart, setCart] = useState([]);
  const [wish, setWish] = useState([]);
  const [alert, setAlert] = useState("");

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
  };

  const toggleSidebar = () => {
    dispatch({ type: TOGGLE_SIDEBAR });
  };

  const addUserToLocalStorage = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
  };

  const removeUserFromLocalStorage = () => {
    localStorage.removeItem("user");
  };

  const registerUser = async (currentUser) => {
    try {
      const response = await axios.post("/api/v1/auth/register", currentUser);
      const { user } = response.data;
      dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: { user },
      });
      addUserToLocalStorage(user);
    } catch (error) {
      dispatch({
        type: REGISTER_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
  };

  const loginUser = async (currentUser) => {
    try {
      const response = await axios.post("/api/v1/auth/login", currentUser);
      const { user } = response.data;
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: { user },
      });
      // console.log(currentUser);
      addUserToLocalStorage(user);
    } catch (error) {
      dispatch({
        type: LOGIN_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
  };

  const logoutUser = () => {
    dispatch({ type: LOGOUT_USER });
    removeUserFromLocalStorage();
  };

  // const sellItem = async (allData) => {
  //   console.log(allData);
  //   try {
  //     const response = await axios.post("/api/v1/item/sell", allData);
  //     const { things } = response.data;
  //     console.log(things);
  //     dispatch({ type: SELL_ITEM_SUCCESS, payload: { things } });
  //   } catch (error) {
  //     dispatch({
  //       type: SELL_ITEM_ERROR,
  //       payload: { msg: error.response.data.msg },
  //     });
  //   }
  // };

  const buyItem = async () => {
    try {
      const { data } = await axios.get("/api/v1/item");
      setItem(data);
      // console.log(item);
    } catch (error) {
      console.log("some error");
    }
  };

  const handleCart = (hello) => {
    setCart(cart.concat(hello));
    setAlert("Item Added to the Cart");
  };

  // const delCart = () => {
  //   console.log("hello");
  // };

  const handleWish = (hello) => {
    setWish(wish.concat(hello));
    setAlert("Item Added to the WishList");
  };

  var arr = [];

  for (var i = 0; i < cart.length; i++) {
    const { name, price } = cart[i];
    arr.push({
      name: name,
      price: price,
    });
  }
  console.log(arr);

  const func = () => {
    fetch("/api/v1/stripe/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: arr,
      }),
    })
      .then(async (res) => {
        if (res.ok) return await res.json();
        return res.json().then((json) => Promise.reject(json));
      })
      .then(({ url }) => {
        window.location = url;
      })
      .catch((e) => {
        console.error(e.error);
      });
  };
  useEffect(() => {
    const timer = setTimeout(() => setAlert(""), 2000);
    return () => clearTimeout(timer);
  }, [cart, wish]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        toggleSidebar,
        registerUser,
        loginUser,
        logoutUser,
        displayAlert,
        // sellItem,
        buyItem,
        item,
        handleCart,
        cart,
        setCart,
        handleWish,
        wish,
        setWish,
        func,
        alert,
        // delCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
