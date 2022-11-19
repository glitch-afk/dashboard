import { Magic } from "@magic-sdk/admin";
import { setLoginSession } from "../../lib/authuttils/auth";

export default async function login(req: any, res: any) {
  try {
  const magic = new Magic("sk_live_5390468A79B77117");
  const didToken = req.headers.authorization.substr(7);
  const metadata = await magic.users.getMetadataByToken(didToken);
  await setLoginSession(res, metadata);
  res.send({ done: true });
  } catch(e) {
    console.log(e)
  }

}