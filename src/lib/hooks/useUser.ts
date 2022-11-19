import { User } from "@/types"
import { useState } from "react"
import { CREATE_USER, GET_USER } from "../helpers/graphQL"
import { axiosAuth } from "../helpers/request"

export const useUser = () => {
  const [user, setUser] = useState<User>()
  
  const getUser = async (email: string) => {
    const res = await axiosAuth(GET_USER, {
      email
    })

    const data = await res.data

    setUser(data.data.users[0])

    return data.data.users[0];
  }

  const createUser = async (user: User) => {
    const res = await axiosAuth(CREATE_USER, {
      data: user
    })

    const data = await res.data

    setUser(data.data.createUser)

    return data.data.createUser;
  }

  return {
    user,
    getUser,
    createUser
  }
}