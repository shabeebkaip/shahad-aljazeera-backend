import Category from "../../models/category.js";

const categoryGet = async (req, res) => {
  try {
    const { page = 1, limit = 10, name } = req.query;
    const query = name ? { name: { $regex: name, $options: "i" } } : {};
    const categories = await Category.find(query)
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    const total = await Category.countDocuments(query);

    res.status(200).json({
      message: "Categories fetched successfully",
      success: true,
      statusCode: 200,
      data: {
        list: categories,
        pagination: {
          total,
          limit: parseInt(limit),
          currentPage: parseInt(page),
          totalPages: Math.ceil(total / limit),
        },
      },
    });
  } catch (error) {
    console.log("Error fetching categories", error);
    res.status(500).json({
      message: "Error fetching categories",
      success: false,
      statusCode: 500,
    });
  }
};

export default categoryGet;
