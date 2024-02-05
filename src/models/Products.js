import { Schema, model, models } from "mongoose";

const productSchema = new Schema(
  {
    description: String,
    images: Array,
    inStock: Number,
    price: Number,
    sizes: Array,
    slug: String,
    tags: Array,
    title: String,
    gender: String,
  },
  { versionKey: false }
);

const Products = models?.Products || model("Products", productSchema);
export default Products;
