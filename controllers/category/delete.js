import Category from "../../models/category.js";

const categoryDelete = async (req, res) => {
  try {
    const { id } = req.params;
    await Category.findByIdAndDelete(id);
    res.status(200).json({
      message: "Category deleted successfully",
      success: true,
      statusCode: 200,
    });
  } catch (error) {
    console.log("Error deleting category", error);
    res.status(500).json({
      message: "Error deleting category",
      success: false,
      statusCode: 500,
    });
  }
};

export default categoryDelete;
