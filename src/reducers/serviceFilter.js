import { FILTER_SERVICE } from '../actions/actionTypes';

const initialState = {
  filterName: '',
};

export default function serviceFilterReducer(state = initialState, action) {
  switch (action.type) {
    case FILTER_SERVICE: {
      const { filterName } = action.payload;
      return { filterName };
    }
    default:
      return state;
  }
}
