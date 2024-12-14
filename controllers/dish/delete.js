import Dish from "../../models/dish.js";

const deleteDish = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedDish = await Dish.findByIdAndDelete(id);
    if (!deletedDish) {
      return res.status(404).json({
        message: "Dish not found",
        success: false,
        statusCode: 404,
      });
    }
    res.status(200).json({
      message: "Dish deleted successfully",
      success: true,
      statusCode: 200,
      data: deletedDish,
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

export default deleteDish;
