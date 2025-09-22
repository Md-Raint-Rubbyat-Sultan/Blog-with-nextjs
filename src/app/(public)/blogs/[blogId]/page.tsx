import BlogDetailsCard from "@/components/modules/Blogs/BlogDetailsCard";
import { Metadata } from "next";
import React from "react";

type Props = { params: Promise<{ blogId: string }> };

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}): Promise<Metadata> => {
  const { blogId } = await params;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/post/${blogId}`,
    {
      next: {
        tags: ["post"],
      },
    }
  );
  const blog = await res.json();

  return {
    title: blog?.title,
    description: blog?.content,
    openGraph: {
      type: "website",
      images: [blog?.thumbnail],
      title: blog?.title,
      description: blog?.content,
    },
  };
};

const BlogDetails: React.FC<Props> = async ({ params }) => {
  const { blogId } = await params;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/post/${blogId}`,
    {
      next: {
        tags: ["post"],
      },
    }
  );
  const blog = await res.json();

  return (
    <div>
      <BlogDetailsCard blog={blog} />
    </div>
  );
};

export default BlogDetails;
