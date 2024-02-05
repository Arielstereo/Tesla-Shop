// import Products from "../../../models/Products";
import dbConnect from "../../../libs/mongoDb";
import { NextResponse } from "next/server";
// import {data} from "../../../mockup/mockup";
import {getProducts} from '../../../services/products'

// INSERTAR LOS DATOS DEL MOCKUP EN LA BD DE MONGO

// export const GET = async () => {
//   const { products } = data;
//   await dbConnect();
//   await Products.deleteMany();
//   await Products.insertMany(products);
//   return NextResponse.json({
//     message: "seeded successfully",
//     products,
//   });
// };


export const GET = async () => {
  await dbConnect();
  const data = await getProducts();
  return NextResponse.json({data})
}