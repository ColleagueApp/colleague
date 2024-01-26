// TODO: Refine these structures and helper functions
// Notification Type descriptors and helper functions

// Types:

// Notification subtypes
// type NotificationGroup = "post" | "birthday";

// Post Notification subtypes
// type PostGroup = "like" | "share" | "comment" | "commentReply" | "relevantPost";

// Like Post notification content
export interface LikePostContent {
  postID: string;
  postText: string;
}
// Share Post notification content
export interface SharePostContent extends LikePostContent {
  newPostID: string;
  newPostText?: string;
}
// Comment Post notification content
export interface CommentPostContent {
  postID: string;
  commentID: string;
  comment: string;
}
// Comment Reply Post notification content
export interface CommentReplyPostContent extends CommentPostContent {
  originalCommentID: string;
  newComment: string;
}

// Birthday Content
export interface BirthdayContent {
  birthDate: Date;
}
// Post Content Types
export type PostContent =
  | LikePostContent
  | SharePostContent
  | CommentPostContent
  | CommentReplyPostContent;

// Notification interface
export interface NavNotification {
  notificationID: string;
  userName: string;
  userID: string;
  userAvatar: string;
  time: Date;
  content: PostContent | BirthdayContent;
}

// Type guards:

// isLikePostContent
export function isLikePostContent(
  content: PostContent,
): content is LikePostContent {
  return "postText" in content;
}

// isSharePostContent
export function isSharePostContent(
  content: PostContent,
): content is SharePostContent {
  return isLikePostContent(content) && "newPostID" in content;
}

// isCommentPostContent
export function isCommentPostContent(
  content: PostContent,
): content is CommentPostContent {
  return "comment" in content && "commentID" in content;
}

// isCommentReplyPostContent
export function isCommentReplyPostContent(
  content: PostContent,
): content is CommentReplyPostContent {
  return isCommentPostContent(content) && "originalCommentID" in content;
}

export function isPostContent(content: any): content is PostContent {
  return (
    isLikePostContent(content) ||
    isSharePostContent(content) ||
    isCommentPostContent(content) ||
    isCommentReplyPostContent(content)
  );
}
// isBirthday
export function isBirthday(content: any): content is BirthdayContent {
  return "birthdate" in content && "time" in content;
}
