import dbConnect from "../../../libs/mongoDb";
import { NextResponse } from "next/server";
import Orders from "../../../models/Orders";
import { getOrders } from "../../../services/orders";

export const POST = async (req) => {
  const { id, info, cart, total, isPaid } = await req.json();
  try {
    await dbConnect();
    const order = new Orders({
      id,
      info,
      cart,
      total,
      isPaid,
    });

    console.log(order);

    await order.save();


    return NextResponse.json(
      {
        id,
        info,
        cart,
        total,
        isPaid,
        _id: order._id,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export const GET = async () => {
  await dbConnect();
  const data = await getOrders();
  return NextResponse.json({data})
}
