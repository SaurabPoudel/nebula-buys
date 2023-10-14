//Please define a `secret` in production. MissingSecret [MissingSecretError]: Please define a `secret` in production. https://next-auth.js.org/errors#missingsecret
// pls help me to fix this error
import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';

const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID ?? '',
      clientSecret: process.env.GITHUB_SECRET ?? '',
    }),
  ],
  secret: process.env.SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
