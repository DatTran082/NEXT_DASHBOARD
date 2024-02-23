// next
import { useSession } from 'next-auth/react';

const useUser = () => {
  const { data: session } = useSession();
  if (session) {
    const user = session?.user;
    const provider = session?.provider;
    let thumb = user?.image;
    if (provider === 'cognito') {
      const email = user?.email?.split('@');
      user.name = email ? email[0] : 'Jone Doe';
    }

    if (!user?.image) {
      user.image = '/assets/images/users/avatar-1.png';
      thumb = '/assets/images/users/avatar-thumb-1.png';
    }

    const newUser = {
      name: user.name,
      email: user.email,
      avatar: user?.image,
      thumb,
      role: 'UI/UX Designer'
    };

    return newUser;
  }
  return false;
};

export default useUser;
