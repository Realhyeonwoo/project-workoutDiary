import * as type from "./actionTypes";

export const createSport = (sort, name) => ({
  type: type.SAGA_CREATE_SPORT,
  sort,
  name
});

export const readSport = sportsList => ({
  type: type.READ_SPORT,
  sportsList
});

export const updateSport = (id, sort, name) => ({
  type: type.UPDATE_SPORT,
  id,
  sort,
  name
});

export const deleteSport = id => {
  console.log(`id: ${id}`);
  return {
    type: type.DELETE_SPORT,
    id
  };
};

export const fetchSportsList = () => {
  return {
    type: type.LOAD_SPORT
  };
};
