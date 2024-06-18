const Area = require("../models/area.model");


async function getAreas(req, res) {
  try {
    const area = await Area.findAll();
    if (!area) return res.status(204).send([]);

    res.status(200).json(area);
  } catch (error) {
    res.status(500).send(error);
  }
}

module.exports = {
   getAreas,
};
