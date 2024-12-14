import Dish from "../../models/dish.js";
import Category from "../../models/category.js";

const createDish = async (req, res) => {
  try {
    const { category } = req.body;
    const categoryExists = await Category.findById(category);
    if (!categoryExists) {
      return res.status(404).json({
        message: "Category not found",
        success: false,
        statusCode: 404,
      });
    }
    const newDish = new Dish(req.body);
    await newDish.save();
    res.status(201).json({
      message: "Dish created successfully",
      success: true,
      statusCode: 201,
      data: newDish,
    });
  } catch (error) {
    console.log("Error creating dish", error);
    res.status(500).json({
      message: "Internal server error",
      success: false,
      statusCode: 500,
    });
  }
};

export default createDish;
