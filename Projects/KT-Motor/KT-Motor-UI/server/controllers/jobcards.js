const { jobcards } = require('../models');
const { Op } = require('sequelize');
// const { get } = require('../routes');

const getJobCards = async (req, res) => {
  try {
    const job_cards = await jobcards.findAll({});
    console.log('Total rows count:', job_cards.length);

    return res.status(200).json({
      success: true,
      result: job_cards
    });

  } catch (error) {
    console.error("Error in getting all jobcard", error);
    return res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

const filterJobCards = async (req, res) => {

  const query = Object.fromEntries(Object.entries(req.query));
  const { transport, vehicle, number } = query;
  console.log('Received filters:', query);


  try {
    const filterObj = {};

    if (transport && transport.trim())
      filterObj.TransportName = { [Op.iLike]: `%${transport.trim()}%`};

    if (vehicle && vehicle.trim())
      filterObj.Vehicle = { [Op.iLike]: `%${vehicle.trim()}%` };

    if (number && number.trim())
      filterObj.Number = { [Op.iLike]: `%${number.trim()}%` };

    const result = await jobcards.findAll({ where: filterObj });

    console.log('Filtered results count:', result.length);

    return res.status(200).json({
      success: true,
      message: 'Job Cards filtered successfully',
      result
    });

  } catch (error) {
    console.error('Error in filtering job cards:', error);
    return res.status(500).json({
      success: false,
      message: 'Error in filtering job cards',
      error: error.message
    });
  }
};

module.exports = {getJobCards, filterJobCards};