import Elysia from "elysia";
import { authModule, requireAuth } from "../../auth/authModule";
import { Profile } from "./Profile";
import { ProfileSettings } from "./ProfileSettings";

export const profileModule = new Elysia()
  .use(authModule)
  .get("/profile", Profile, { beforeHandle: requireAuth })
  .get("/profile/settings", ProfileSettings, { beforeHandle: requireAuth });

