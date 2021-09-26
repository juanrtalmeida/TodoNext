import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { query as q } from "faunadb";
import { fauna } from "../../../services/faunaCreator";

export default NextAuth({
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_ID_KEY,
      clientSecret: process.env.GOOGLE_SECRET_KEY,
    }),
    Providers.Facebook({
      clientId: process.env.FACEBOOK_ID_KEY,
      clientSecret: process.env.FACEBOOK_SECRET_KEY,
    }),
  ],
  callbacks: {
    async signIn(user, account, profile) {
      const { email } = user;
      await fauna.query(
        q.If(
          q.Not(q.Exists(q.Match(q.Index("user_by_email"), q.Casefold(email)))),
          q.Create(q.Collection("users"), { data: { email } }),
          q.Get(q.Match(q.Index("user_by_email"), q.Casefold(email)))
        )
      );
      return true;
    },
  },
});
