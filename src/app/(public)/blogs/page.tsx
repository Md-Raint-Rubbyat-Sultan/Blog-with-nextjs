import BlogCard from "@/components/modules/Blogs/BlogCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs",
  description: "A simple blog built with Next.js, Tailwind CSS, and shadcn/ui.",
};

const AllBlogsPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post`, {
    next: {
      tags: ["post"],
    },
  });
  const { data: blogs } = await res.json();

  return (
    <div className="py-30 px-4 max-w-7xl mx-auto">
      <h2 className="text-center text-4xl">All Blogs</h2>
      <div className="my-16">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8">
          {blogs.map((blog: any) => (
            <BlogCard key={blog.id} post={blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllBlogsPage;
