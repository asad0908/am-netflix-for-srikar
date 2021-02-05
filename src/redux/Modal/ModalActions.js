export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

export const openTheModal = (data) => {
  return {
    type: OPEN_MODAL,
    payload: data,
  };
};

export const closeTheModal = () => {
  return {
    type: CLOSE_MODAL,
  };
};
