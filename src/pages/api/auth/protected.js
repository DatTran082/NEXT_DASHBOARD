// This is an example of to protect an API route
import { getSession } from 'next-auth/react';

export default async function handler(req, res) {
  const session = await getSession({ req });

  if (session) {
    res.send({ protected: true });
  } else {
    res.send({ protected: false });
  }
}
