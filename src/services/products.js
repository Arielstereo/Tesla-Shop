import dbConnect from "../libs/mongoDb";
import Products from "../models/Products";

export const getProducts = async () => {
  await dbConnect();
  try {
    const products = await Products.find({});
    return products
  } catch (error) {
    console.log(error);
  }
};