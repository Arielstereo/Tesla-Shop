import { Schema, model, models } from "mongoose";

const ordersSchema = new Schema(
  {
    id: Number,
    info: {
      name: String,
      surname: String,
      address: String,
      city: String,
      phone: String,
      country: String,
    },
    cart: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: "Products",
        },
        quantity: Number,
        size: String,
      },
    ],
    total: Number,
    isPaid: Boolean,
  },
  { versionKey: false }
);

const Orders = models?.Orders || model("Orders", ordersSchema);
export default Orders;
