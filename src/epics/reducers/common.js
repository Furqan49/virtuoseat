const initState = {
  isCollapse: false,
};

export default (state = initState, action) => {
  switch (action.type) {
    case "SET_COLLAPSE":
      return {
        ...state,
        isCollapse: action.payload.isCollapse,
      };

    default:
      return state;
  }
};
