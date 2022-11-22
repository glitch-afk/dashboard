import {
  getUser,
  ISession,
} from "@/lib/authuttils/sessionInfo";
import { url } from "inspector";
import router, { useRouter } from "next/router";
import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

interface Props {
  children: ReactNode; 
}

interface IContext {
  session: ISession | null
  currentLink: string
  setCurrentLink: Dispatch<SetStateAction<string>>
}

const context = createContext({} as IContext);

export const useSession = () => {
  return useContext(context);
};

export const SessionProvider = ({ children }: Props) => {
  const [session, setSession] = useState<ISession | null>(null);
  const [currentLink, setCurrentLink] = useState("")
  const router = useRouter()
  useEffect(() => {
    (async () => {
      console.log("hi")
      const user: any = await getUser();
      console.log(user)
      if(user.user) {
        console.log("hello", user)
      setSession((prev: any) => {
        return { ...prev, user: user?.user, isLoggedIn: user.user.email ? true: false };
      });
      }else {
        router.push('/auth')
      }
   })();
  }, []);



  useEffect(() => {
    if(session) {
      console.log(session)
      if(session.isLoggedIn == false) {
          router.push("/auth")
      }
    }
  }, [session])


  



  const shared_value = {
    session, 
    currentLink,
    setCurrentLink
  };
  return (
    <>
      <context.Provider value={shared_value}>{children}</context.Provider>
    </>
  );
};
