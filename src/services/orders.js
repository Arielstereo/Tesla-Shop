import dbConnect from "../libs/mongoDb";
import Orders from "../models/Orders";
import Products from "../models/Products"
import { model } from "mongoose";

const productsModel = model('Products', Products.schema);

export const getOrders = async () => {
  await dbConnect();
  try {
    
    const orders = await Orders.find({}).populate({path: 'cart.product', model: productsModel});
    return orders;
  } catch (error) {
    console.log(error);
  }
};

export const getOrdersById = async (id) => {
  await dbConnect();
  try {
    const orders = await Orders.findById(id).populate({path: 'cart.product', model: productsModel});
    return orders;
  } catch (error) {
    console.log(error);
  }
};

