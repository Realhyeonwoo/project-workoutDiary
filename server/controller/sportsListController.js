import SportsList from "../models/SportsList";

export const loadSports = async (req, res) => {
  console.log("loadSports");
  try {
    const sports = await SportsList.find({});
    console.log("load sportsList");
    console.log(sports);
    res.send(sports);
  } catch (err) {
    console.log(err);
  }
};

export const addSport = async (req, res) => {
  // console.log(req.body);

  // const {
  //   body: { sort, name }
  // } = req;

  console.log(req.body.sort.sort, req.body.sort.name);

  const sort = req.body.sort.sort;
  const name = req.body.sort.name;
  try {
    const newSport = await SportsList.create({ sort, name });
    console.log(newSport);
    res.send(newSport);
  } catch (err) {
    console.log(err);
  }
};

export const deleteSport = async (req, res) => {
  const {
    body: { id }
  } = req;
  console.log("삭제@@@@@@@@@@@");
  console.dir(req.body);
  try {
    const result = await SportsList.deleteOne({ _id: id });
    console.log("삭제결과");
    console.log(result);
    res.send(result);
  } catch (err) {
    console.log(err);
  }
};

export const updateSport = async (req, res) => {
  const {
    body: { id, sort, name }
  } = req;
  console.log("수정내용");
  console.log(req.body);
  try {
    const result = await SportsList.update(
      { _id: id },
      { $set: { sort, name } }
    );
    console.log(result);
    res.send(result);
  } catch (err) {
    console.log(err);
  }
};
