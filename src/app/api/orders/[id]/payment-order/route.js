import { NextResponse } from "next/server";
import Orders from "../../../../../models/Orders";
import dbConnect from "../../../../../libs/mongoDb";

export const POST = async (req, { params }) => {
  const { id } = params;
  await dbConnect();
  const order = await Orders.findById(id);
  order.isPaid = true;
  const updatedOrder = await order.save();
  return NextResponse.json({ updatedOrder });
};
