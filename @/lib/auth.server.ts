import { Authenticator } from "remix-auth";
import { FormStrategy } from "remix-auth-form";
import { eq } from "drizzle-orm";
import invariant from "tiny-invariant";
import { users } from "db/schema";
import { authSessionStorage } from "./cookie.server";
import { verify } from "./passwordHashing.server";
import { drizzle } from "drizzle-orm/d1";

export const authenticator = new Authenticator<{
  email: string | null;
  id: number;
}>(authSessionStorage);

authenticator.use(
  new FormStrategy(async ({ form, context }: any) => {
    const email = form.get("email");
    const password = form.get("password");

    const env = context.cloudflare.env as Env;
    const db = drizzle(env.DB);

    const possibleUser = await db
      .select({
        email: users.email,
        password: users.password,
        id: users.id,
      })
      .from(users)
      .where(eq(users.email, email))
      .get();

    if (!possibleUser) {
      throw new Error("Invalid email or password");
    }
    invariant(possibleUser.password, "Password is required");
    const passwordValid = await verify({
      hash: possibleUser.password,
      password: password,
    });

    if (!passwordValid) {
      throw new Error("Invalid email or password");
    }
    return {
      email: possibleUser.email,
      id: possibleUser.id,
    };
  }),
  "form"
);
