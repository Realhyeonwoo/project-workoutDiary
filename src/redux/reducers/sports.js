import produce from "immer";
import * as type from "../actionTypes";

const initialState = [];

const sports = (state = initialState, action) => {
  switch (action.type) {
    case type.CREATE_SPORT:
      console.log(action);
      return produce(state, draft => {
        draft.push({
          sort: action.sort,
          name: action.name
        });
      });
    case type.READ_SPORT:
      console.log("test");
      state = [];
      return produce(state, draft => {
        action.sportsList.map(sport => draft.push(sport));
      });
    // case type.UPDATE_SPORT:
    //   return produce(state, draft => {
    //     const index = draft.findIndex(v => v.id === action.id);
    //     draft[index] = {
    //       id: action.id,
    //       sort: action.sort,
    //       name: action.name
    //     };
    //   });
    // case type.DELETE_SPORT:
    //   return produce(state, draft => {
    //     const index = draft.findIndex(v => v.id === action.id);
    //     draft.splice(index, 1);
    //   });
    default:
      return state;
  }
};

export default sports;
