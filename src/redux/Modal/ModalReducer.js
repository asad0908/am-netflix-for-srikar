const { CLOSE_MODAL, OPEN_MODAL } = require("./ModalActions");

const initialState = {
  modalState: false,
  dataValue: null,
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLOSE_MODAL:
      return {
        modalState: false,
        dataValue: null,
      };

    case OPEN_MODAL:
      return {
        modalState: true,
        dataValue: action.payload,
      };

    default:
      return state;
  }
};

export default modalReducer;
