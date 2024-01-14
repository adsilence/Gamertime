export interface User {
  email: string;
  username: string;
  displayName: string;
  avatar: string;
}

export interface Post {
  id: string;
  author: string;
  dateTime: string;
  text: string;
  replies: Post[];
}

export function getUser(): User | undefined {
  // return undefined;

  return {
    email: "mattg@example.com",
    username: "mattg5",
    displayName: "Matt G",
    avatar: "https://avatars.githubusercontent.com/u/20482179?v=4",
  };
}

export function registerUser(newUser: {
  email: string;
  username: string;
  displayName: string;
}) {
  return {
    ...newUser,
    avatar: "https://avatars.githubusercontent.com/u/20482179?v=4",
  };
}

// if parentId is provided, it's a reply to that post. otherwise it's a new post
export function createPost(text: string, parentId?: string) {}

export function editPost(id: string, text: string) {}

export function deletePost(id: string) {}

export function getFeed() {}
