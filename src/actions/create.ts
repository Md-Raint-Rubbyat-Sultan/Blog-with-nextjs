"use server";

import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export const create = async (data: FormData) => {
  const blogsInfo = Object.fromEntries(data.entries());

  const modifiedBlogs = {
    ...blogsInfo,
    authorId: 1,
    tags: blogsInfo.tags
      .toString()
      .split(",")
      .map((tag) => tag.trim()),
    isFeatured: Boolean(blogsInfo.isFeatured),
  };

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(modifiedBlogs),
  });
  const result = await res.json();
  if (result?.id) {
    revalidateTag("post");
    redirect("/blogs");
  }
};
