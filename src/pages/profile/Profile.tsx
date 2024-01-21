import { User } from "../../auth/authModule";

export function Profile(context: { user: User }) {
  return `${context.user.displayName}'s profile`;
}