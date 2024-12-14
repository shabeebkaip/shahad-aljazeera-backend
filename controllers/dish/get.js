import Dish from "../../models/dish.js";

const getDish = async (req, res) => {
  try {
    const { page = 1, limit = 10, search } = req.query;
    const query = {};
    if (search) {
      query.name = { $regex: search, $options: "i" };
    }
    const dishes = await Dish.find(query)
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    const total = await Dish.countDocuments(query);

    res.send({
      message: "Dishes fetched successfully",
      success: true,
      statusCode: 200,
      data: {
        list: dishes,
        pagination: {
          total,
          limit: parseInt(limit),
          currentPage: parseInt(page),
          totalPages: Math.ceil(total / limit),
        },
      },
    });
  } catch (error) {
    console.log("Error getting dish", error);
  }
};

export default getDish;
