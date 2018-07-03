import { FETCH_POSTS, NEW_POST, UPDATE_POST } from '../actions/types';

const initialState = {
  items: [],
  item: {},
  update: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload
      };
    case NEW_POST:
      return {
        ...state,
        item: action.payload
      };
      case UPDATE_POST:
      console.log("sucess: " + JSON.stringify(state));
      const updatedItems = state.items.map(item => {
        if(item.postID === action.payload.postID){
          return { ...item, ...action.payload }
        }
        return item
      })
      console.log("sucess: " + JSON.stringify(updatedItems));
      return {
        items :updatedItems,
        item: {},
        update: action.payload
      };
    default:
      return state;
  }
}
