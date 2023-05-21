import { usersData } from "../components/data/usersData";
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} from "../constants/userConstants";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    let userRole = "";
    const foundUser = usersData.find((user) => user.email === email);
    if (foundUser && foundUser.password === password) {
      userRole = foundUser.role;
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
      payload: error,
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  localStorage.removeItem("cards");
  dispatch({ type: USER_LOGOUT });
};
