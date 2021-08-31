import NextAuth from "next-auth";
import Providers from "next-auth/providers";

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
      return "/welcome";
    },
  },
});
