const initialState = {
  count: "",
};

function countReducer(state = initialState, action) {
  switch (action.type) {
    case 'increment':
      return {
        count: state.count + '1',
      };
    case 'decrement':
      return {
        count: state.count + '0',
      };
    default:
      return {
        ...state,
      };
  }
}
export default countReducer;
