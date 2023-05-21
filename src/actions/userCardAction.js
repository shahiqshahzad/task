import data from "../components/data/CardsData";
import {
  CARD_ADD_COMMENT,
  CARD_ADD_LIKE,
  CARD_LIST_FAIL,
  CARD_LIST_REQUEST,
  CARD_LIST_SUCCESS,
} from "../constants/UserDashboard";

export const listCards = () => (dispatch) => {
  try {
    dispatch({ type: CARD_LIST_REQUEST });
    const cardData = data;
    dispatch({ type: CARD_LIST_SUCCESS, payload: cardData });
  } catch (error) {
    dispatch({
      type: CARD_LIST_FAIL,
      payload: "fail not load",
    });
  }
};
export const addComment = (id, comment, img) => async (dispatch) => {
  dispatch({
    type: CARD_ADD_COMMENT,
    payload: {
      id,
      comment,
      img,
    },
  });
};
export const addLike = (id) => async (dispatch) => {
  dispatch({
    type: CARD_ADD_LIKE,
    payload: {
      id,
    },
  });
};
