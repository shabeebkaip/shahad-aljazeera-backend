import Category from "../../models/category.js";

const categoryCreate = async (req, res) => {
  try {
    const newCategory = new Category(req.body);
    await newCategory.save();
    res.status(201).json({
      message: "Category created successfully",
      success: true,
      statusCode: 201,
      category: newCategory,
    });
  } catch (error) {
    console.log("Error creating category", error);
  }
};

export default categoryCreate;
