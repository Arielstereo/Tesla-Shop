import { NextResponse } from "next/server";
import dbConnect from "../../../../libs/mongoDb";
import Users from "../../../../models/Users";
import bcrypt from "bcryptjs";

export const POST = async (req) => {
  try {
    await dbConnect();
    const { username, email, password } = await req.json();

    const userFound = await Users.findOne({ email });

    if (userFound)
      return NextResponse.json(
        { message: "User already exists!" },
        { status: 404 }
      );

    const hashPassword = await bcrypt.hash(password, 10);

    const user = new Users({
      username,
      email,
      password: hashPassword,
    });

    await user.save();

    return NextResponse.json(
      {
        username,
        email,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log(error);
  }
};
