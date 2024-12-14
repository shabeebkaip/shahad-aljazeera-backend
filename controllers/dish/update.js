import Dish from "../../models/dish.js";
import Category from "../../models/category.js";

const updateDish = async (req, res) => {
  try {
    const { id } = req.params;
    const { category } = req.body;
    const categoryExists = await Category.findById(category);
    if (!categoryExists) {
      return res.status(404).json({
        message: "Category not found",
        success: false,
        statusCode: 404,
      });
    }
    const updatedDish = await Dish.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedDish) {
      return res.status(404).json({
        message: "Dish not found",
        success: false,
        statusCode: 404,
      });
    }
    res.status(200).json({
      message: "Dish updated successfully",
      success: true,
      statusCode: 200,
      dish: updatedDish,
    });
  } catch (error) {
    console.log("Error updating dish", error);
    res.status(500).json({
      message: "Internal server error",
      success: false,
      statusCode: 500,
    });
  }
};

export default updateDish;
