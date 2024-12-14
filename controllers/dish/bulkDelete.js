import Dish from "../../models/dish.js";

const bulkDelete = async (req, res) => {
  try {
    const { ids } = req.body;
    const deletedDishes = await Dish.deleteMany({ _id: { $in: ids } });
    res.status(200).json({
      message: "Dishes deleted successfully",
      success: true,
      statusCode: 200,
      data: deletedDishes,
    });
  } catch (error) {
    console.log("Error deleting dish", error);
    res.status(500).json({
      message: "Internal server error",
      success: false,
      statusCode: 500,
    });
  }
};

export default bulkDelete;
