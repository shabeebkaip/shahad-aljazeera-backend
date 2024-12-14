import Category from "../../models/category.js";

const categoryUpdate = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedCategory = await Category.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({
      message: "Category updated successfully",
      success: true,
      statusCode: 200,
      category: updatedCategory,
    });
  } catch (error) {
    console.log("Error updating category", error);
    res.status(500).json({
      message: "Error updating category",
      success: false,
      statusCode: 500,
    });
  }
};

export default categoryUpdate;
