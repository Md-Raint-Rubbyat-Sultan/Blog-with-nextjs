import BlogCard from "@/components/modules/Blogs/BlogCard";
import Hero from "@/components/modules/Home/Hero";

export default async function HomePage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post`, {
    next: {
      tags: ["post"],
    },
  });
  const result = await res.json();

  const { data: blogs } = result;

  return (
    <div>
      <Hero />
      <h2 className="text-center my-5 text-4xl">Featured Posts</h2>
      <div className="container mx-auto my-16">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8">
          {blogs.slice(0, 4).map((blog: any) => (
            <BlogCard key={blog.id} post={blog} />
          ))}
        </div>
      </div>
      <div></div>
    </div>
  );
}
