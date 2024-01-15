export interface Post {
  id: string;
  author: string;
  dateTime: string;
  text: string;
  replies: Post[];
}

// if parentId is provided, it's a reply to that post. otherwise it's a new post
export function createPost(text: string, parentId?: string) {}

export function editPost(id: string, text: string) {}

export function deletePost(id: string) {}

export function getFeed() {}
