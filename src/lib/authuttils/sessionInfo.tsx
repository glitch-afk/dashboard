export interface IUser {
  email: string
}

export interface ISession {
  user: IUser  | null
  isLoggedIn: boolean 
}

export const getUser = async() => {
  try {
    const res = await fetch("/api/verifyToken", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "same-origin"
    });
    return res.json()
  } catch(e)  {
    console.log(e)
    return {
      user: null,
      isLoggedIn: false 
    }
  }
}



