import SequelizeAdapter from '@next-auth/sequelize-adapter';
import NextAuth, { NextAuthOptions } from 'next-auth';
import EmailProvider from 'next-auth/providers/email';
import FacebookProvider from 'next-auth/providers/facebook';
import GoogleProvider from 'next-auth/providers/google';
import SlackProvider from 'next-auth/providers/slack';
import { Sequelize } from 'sequelize';
import { sendVerificationRequest } from '../lib/verificationRequest';

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
});

export const authOptions: NextAuthOptions = {
  adapter: SequelizeAdapter(sequelize),
  secret: process.env.JWT_SECRET,
  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
      sendVerificationRequest,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    SlackProvider({
      clientId: process.env.SLACK_CLIENT_ID,
      clientSecret: process.env.SLACK_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: '/',
    signOut: '/signin',
    error: '/signin?status=error',
    verifyRequest: '/signin/verify-request',
    newUser: '/',
  },
};

export default NextAuth(authOptions);
