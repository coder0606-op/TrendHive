import mongoose from "mongoose";
import dotenv from "dotenv";
import productModel from "./models/productModel.js";

dotenv.config();

const dummyProducts = [
  {
    name: "T-Shirt",
    description: "Comfortable cotton t-shirt",
    price: 499,
    image: ["img1.jpg"],
    category: "Clothing",
    subCategory: "Topwear",
    sizes: ["S", "M", "L"],
    bestseller: true,
    date: Date.now(),
  },
  {
    name: "Jeans",
    description: "Stylish blue jeans",
    price: 999,
    image: ["img2.jpg"],
    category: "Clothing",
    subCategory: "Bottomwear",
    sizes: ["M", "L", "XL"],
    bestseller: false,
    date: Date.now(),
  },
  {
    name: "Sneakers",
    description: "Running shoes",
    price: 1999,
    image: ["img3.jpg"],
    category: "Footwear",
    subCategory: "Sports",
    sizes: ["7", "8", "9"],
    bestseller: true,
    date: Date.now(),
  }
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);

    // Optional: clear old data
    await productModel.deleteMany();

    // Insert new data
    await productModel.insertMany(dummyProducts);

    console.log("✅ Dummy data inserted");
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

seedDB();