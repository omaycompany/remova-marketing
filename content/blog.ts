import { blogPosts1 } from "./blog-1";
import { blogPosts2 } from "./blog-2";
import { blogPosts3 } from "./blog-3";
import { blogPosts4 } from "./blog-4";
import { blogPosts5 } from "./blog-5";
import { blogPosts6 } from "./blog-6";
export type { BlogPost } from "./blog-1";

export const allBlogPosts = [
    ...blogPosts1, ...blogPosts2, ...blogPosts3,
    ...blogPosts4, ...blogPosts5, ...blogPosts6,
];
