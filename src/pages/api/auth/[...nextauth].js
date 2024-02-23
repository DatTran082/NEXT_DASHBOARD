// next
import NextAuth from 'next-auth';
import Auth0Provider from 'next-auth/providers/auth0';
import CredentialsProvider from 'next-auth/providers/credentials';
import CognitoProvider from 'next-auth/providers/cognito';
import GoogleProvider from 'next-auth/providers/google';

// third-party
import axios from 'utils/axios';

export let users = [
  {
    id: 1,
    name: 'Jone Doe',
    email: 'info@codedthemes.com',
    password: '123456'
  }
];

export default NextAuth({
  secret: process.env.NEXTAUTH_SECRET_KEY,
  providers: [
    Auth0Provider({
      name: 'Auth0',
      clientId: process.env.REACT_APP_AUTH0_CLIENT_ID,
      clientSecret: process.env.REACT_APP_AUTH0_CLIENT_SECRET,
      issuer: `https://${process.env.REACT_APP_AUTH0_DOMAIN}`
    }),
    CognitoProvider({
      name: 'Cognito',
      clientId: process.env.REACT_APP_COGNITO_CLIENT_ID,
      clientSecret: process.env.REACT_APP_COGNITO_CLIENT_SECRET,
      issuer: `https://cognito-idp.${process.env.REACT_APP_COGNITO_REGION}.amazonaws.com/${process.env.REACT_APP_COGNITO_POOL_ID}`
    }),
    GoogleProvider({
      name: 'Google',
      clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      clientSecret: process.env.REACT_APP_GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code'
        }
      }
    }),
    // functionality provided for credentials based authentication is intentionally limited to discourage use of passwords due to the
    // inherent security risks associated with them and the additional complexity associated with supporting usernames and passwords.
    // We recommend to ignore credential based auth unless its super necessary
    // Ref: https://next-auth.js.org/providers/credentials
    // https://github.com/nextauthjs/next-auth/issues/3562
    CredentialsProvider({
      id: 'login',
      name: 'Login',
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'Enter Email' },
        password: { label: 'Password', type: 'password', placeholder: 'Enter Password' }
      },
      async authorize(credentials) {
        try {
          const user = await axios.post('/api/account/login', {
            password: credentials?.password,
            email: credentials?.email
          });

          if (user) {
            user.data.user['accessToken'] = user.data.serviceToken;
            return user.data.user;
          }
        } catch (e) {
          const errorMessage = e?.response.data.message;
          throw new Error(errorMessage);
        }
      }
    }),
    // functionality provided for credentials based authentication is intentionally limited to discourage use of passwords due to the
    // inherent security risks associated with them and the additional complexity associated with supporting usernames and passwords.
    // We recommend to ignore credential based auth unless its super necessary
    // Ref: https://next-auth.js.org/providers/credentials
    // https://github.com/nextauthjs/next-auth/issues/3562
    CredentialsProvider({
      id: 'register',
      name: 'Register',
      credentials: {
        name: { label: 'Name', type: 'text', placeholder: 'Enter Name' },
        email: { label: 'Email', type: 'email', placeholder: 'Enter Email' },
        password: { label: 'Password', type: 'password', placeholder: 'Enter Password' }
      },
      async authorize(credentials) {
        try {
          const user = await axios.post('/api/account/register', {
            name: credentials?.name,
            password: credentials?.password,
            email: credentials?.email
          });

          if (user) {
            users.push(user.data);
            return user.data;
          }
        } catch (e) {
          const errorMessage = e?.response.data.message;
          throw new Error(errorMessage);
        }
      }
    })
  ],
  callbacks: {
    jwt: async ({ token, user, account }) => {
      if (user) {
        token.accessToken = user.accessToken;
        token.id = user.id;
        token.provider = account?.provider;
      }
      return token;
    },
    session: ({ session, token }) => {
      if (token) {
        session.id = token.id;
        session.provider = token.provider;
        session.tocken = token;
      }
      return session;
    }
  },
  session: {
    strategy: 'jwt',
    maxAge: Number(process.env.REACT_APP_JWT_TIMEOUT)
  },
  jwt: {
    secret: process.env.REACT_APP_JWT_SECRET
  },
  pages: {
    signIn: '/login',
    newUser: '/register'
  }
});
