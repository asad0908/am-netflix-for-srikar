const { LOGIN_USER, LOGOUT_USER } = require("./UserActions");

const initialState = {
  user: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        user: action.payload,
      };

    case LOGOUT_USER:
      return {
        user: null,
      };

    default:
      return state;
  }
};

export default userReducer;
