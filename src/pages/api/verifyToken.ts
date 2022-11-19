import { TOKEN_SECRET } from "@/lib/authuttils/auth";
import Iron from "@hapi/iron"

export default async function verifyToken (req: any, res: any) {
  let user : any 
  try {
    const token = req.cookies.token
    if(token) {
      console.log(token)
      const isTokenVerified = await Iron.unseal(token,  TOKEN_SECRET, Iron.defaults) 
      user = isTokenVerified
      console.log(isTokenVerified)
    } else {
      console.log("no token is here fuck of ")
      user = null
    }
    res.send({ user: user });
  } catch (e) {
    console.log(e);
  }
}