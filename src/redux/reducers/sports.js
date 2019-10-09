import produce from "immer";
import * as type from "../actionTypes";

const initialState = [
  {
    id: 0,
    sort: "가슴",
    name: "벤치프레스"
  }
];

const sports = (state = initialState, action) => {
  switch (action.type) {
    case type.CREATE_SPORT:
      return produce(state, draft => {
        draft.push({
          id: action.id,
          sort: action.sort,
          name: action.name
        });
      });
    case type.READ_SPORT:
      return state;
    case type.UPDATE_SPORT:
      return produce(state, draft => {
        const index = draft.findIndex(v => v.id === action.id);
        draft[index] = {
          id: action.id,
          sort: action.sort,
          name: action.name
        };
      });
    case type.DELETE_SPORT:
      return produce(state, draft => {
        const index = draft.findIndex(v => v.id === action.id);
        draft.splice(index, 1);
      });
    default:
      return state;
  }
};

export default sports;
