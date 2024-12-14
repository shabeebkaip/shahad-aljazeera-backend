import Category from "../../models/category.js";

const categoryBulkDelete = async (req, res) => {
  try {
    const { ids } = req.body;
    await Category.deleteMany({ _id: { $in: ids } });
    res.status(200).json({
      message: "Categories deleted successfully",
      success: true,
      statusCode: 200,
    });
  } catch (error) {
    console.log("Error deleting categories", error);
    res.status(500).json({
      message: "Error deleting categories",
      success: false,
      statusCode: 500,
    });
  }
};

export default categoryBulkDelete;
