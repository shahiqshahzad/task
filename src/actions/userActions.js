import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
} from "../constants/userConstants";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    let userRole = "";
    if (email === "user@example.com") {
      userRole = "user";
    } else if (email === "admin@example.com") {
      userRole = "admin";
    } else {
      throw new Error("Invalid User");
    }

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: {
        userRole,
      },
    });
    localStorage.setItem("userInfo", JSON.stringify(userRole));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: error.message,
    });
  }
};
