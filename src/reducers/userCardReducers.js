import {
  CARD_ADD_COMMENT,
  CARD_ADD_LIKE,
  CARD_LIST_FAIL,
  CARD_LIST_REQUEST,
  CARD_LIST_SUCCESS,
} from "../constants/UserDashboard";

export const cardListReducer = (state = { cards: [] }, action) => {
  switch (action.type) {
    case CARD_LIST_REQUEST:
      return { loading: true, cards: [] };
    case CARD_LIST_SUCCESS:
      return { loading: false, cards: action.payload };
    case CARD_LIST_FAIL:
      return { loading: false, error: action.payload };
    case CARD_ADD_COMMENT:
      const cards = state.cards;
      const updatedPosts = cards.map((post) => {
        if (post.id === action.payload.id) {
          const newCommentObj = {
            id: post.comments.length + 1,
            user: "user",
            comment: action.payload.comment[action.payload.id]?.comment || "",
            userImage: action.payload.img,
          };

          return {
            ...post,
            comments: [...post.comments, newCommentObj],
          };
        }
        return post;
      });
      return {
        ...state,
        cards: updatedPosts,
      };
    case CARD_ADD_LIKE:
      const card = state.cards;
      const cardLikeUpdated = card.map((post) => {
        if (post.id === action.payload.id) {
          return { ...post, likes: post.likes + 1 };
        }
        return post;
      });
      localStorage.setItem("cards", cardLikeUpdated);
      return {
        ...state,
        cards: cardLikeUpdated,
      };

    default:
      return state;
  }
};
