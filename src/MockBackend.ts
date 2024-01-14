export const User = {};

export function getUser() {
  // return undefined;

  return {
    avatar: "https://avatars.githubusercontent.com/u/20482179?v=4",
  };
}

export function registerUser(user: {
  email: string;
  username: string;
  displayName: string;
}) {
  return user;
}
