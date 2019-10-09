import * as type from "./actionTypes";

let sportId = 1;

export const createSport = (sort, name) => ({
  type: type.CREATE_SPORT,
  id: sportId++,
  sort,
  name
});

export const readSport = () => ({
  type: type.READ_SPORT
});

export const updateSport = (id, sort, name) => ({
  type: type.UPDATE_SPORT,
  id,
  sort,
  name
});

export const deleteSport = id => ({
  type: type.DELETE_SPORT,
  id
});
