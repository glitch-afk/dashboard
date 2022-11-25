import { useRouter } from 'next/router';
import type { Dispatch, ReactNode, SetStateAction } from 'react';
import { createContext, useContext, useEffect, useState } from 'react';

import type { ISession } from '@/lib/authuttils/sessionInfo';
import { getUser } from '@/lib/authuttils/sessionInfo';

interface Props {
  children: ReactNode;
}

interface IContext {
  session: ISession | null;
  currentLink: string;
  setCurrentLink: Dispatch<SetStateAction<string>>;
}

const context = createContext({} as IContext);

export const useSession = () => {
  return useContext(context);
};

export const SessionProvider = ({ children }: Props) => {
  const [session, setSession] = useState<ISession | null>(null);
  const [currentLink, setCurrentLink] = useState('');
  const router = useRouter();
  useEffect(() => {
    (async () => {
      console.log('hi');
      const user: any = await getUser();
      console.log(user);
      if (user.user) {
        console.log('hello', user);
        setSession((prev: any) => {
          return {
            ...prev,
            user: user?.user,
            isLoggedIn: !!user.user.email,
          };
        });
      } else {
        router.push('/auth');
      }
    })();
  }, []);

  useEffect(() => {
    if (session) {
      console.log(session);
      if (session.isLoggedIn === false) {
        router.push('/auth');
      }
    }
  }, [session]);

  const sharedValue = {
    session,
    currentLink,
    setCurrentLink,
  };
  return (
    <>
      <context.Provider value={sharedValue}>{children}</context.Provider>
    </>
  );
};
