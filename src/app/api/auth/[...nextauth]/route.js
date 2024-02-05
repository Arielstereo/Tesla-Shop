import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import dbConnect from "../../../../libs/mongoDb";
import Users from "../../../../models/Users";
import bcrypt from "bcryptjs";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        await dbConnect();
        const user = await Users.findOne({ email: credentials.email });

        if (!user) throw new Error("Invalid credentials!");

        const matchPassword = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!matchPassword) throw new Error("Invalid credentials!");

        return user;
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin"
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.user = user;
      return token;
    },
    async session({ session, token }) {
      session.user = token.user;
      return session;
    },
  },
});

export { handler as GET, handler as POST };
