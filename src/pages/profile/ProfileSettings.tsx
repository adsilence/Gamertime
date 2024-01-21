import { User } from "../../auth/authModule";

export function ProfileSettings(context: { user: User }) {
  return `${context.user.displayName}'s settings`;
}