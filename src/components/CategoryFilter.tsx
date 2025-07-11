import { useState, useMemo } from "react";

interface BlogPost {
  title: string;
  excerpt: string;
  pubDate: string; // ISO date string like "2025-07-03T00:00:00Z"
  categories: string[];
  slug: string;
}

interface Props {
  blogs: BlogPost[];
  categories: string[];
}

export default function CategoryFilter({ blogs, categories }: Props) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Filtered and searched blogs
  const filteredBlogs = useMemo(() => {
  const now = new Date();

  return blogs
    .filter((blog) => {
      const pubDateOnly = blog.pubDate.split("T")[0]; // Get "YYYY-MM-DD"
      const [year, month, day] = pubDateOnly.split("-").map(Number);
      const blogDate = new Date(year, month - 1, day); // Local time, no timezone shift

      return blogDate <= now; // Only show if it's today or earlier
    })
    .filter((blog) =>
      selectedCategory === "all"
        ? true
        : blog.categories.includes(selectedCategory)
    )
    .filter((blog) => {
      const query = searchQuery.toLowerCase();
      return (
        blog.title.toLowerCase().includes(query) ||
        blog.excerpt.toLowerCase().includes(query)
      );
    });
  }, [blogs, selectedCategory, searchQuery]);


  const baseBtn =
    "px-4 py-2 rounded-full border text-sm transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#54336c] hover:bg-gray-100 dark:hover:bg-gray-800";
  const activeBtn =
    "bg-gray-900 text-white dark:bg-white dark:text-black border-gray-900 dark:border-white";

  return (
    <section className="px-4 md:px-8 lg:px-16 py-12">
      {/* Search Input */}
      <div className="mb-6 max-w-xl mx-auto">
        <label htmlFor="blog-search" className="sr-only">Search</label>
        <input
          id="blog-search"
          role="searchbox"
          type="text"
          placeholder="Search blog posts..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-transparent text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#54336c]"
        />
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3 justify-center mb-10" role="group" aria-label="Filter blog posts by category">
        <button
          className={`${baseBtn} ${selectedCategory === "all" ? activeBtn : "border-gray-300 dark:border-gray-600"}`}
          onClick={() => setSelectedCategory("all")}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`${baseBtn} ${selectedCategory === cat ? activeBtn : "border-gray-300 dark:border-gray-600"}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredBlogs.length === 0 ? (
          <p className="col-span-full text-center text-gray-500 dark:text-gray-400 italic" role="status" aria-live="polite">
            No blog posts found.
          </p>
        ) : (
          filteredBlogs.map((blog) => {
            const dateOnly = blog.pubDate.split("T")[0]; // "2025-07-03"
            const [year, month, day] = dateOnly.split("-");
            const formattedDate = new Date(Number(year), Number(month) - 1, Number(day)).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            });

            return (
              <a
                key={blog.slug}
                href={`/blog/${blog.slug}`}
                className="group block border border-gray-300 dark:border-gray-600 rounded-xl p-6 transition-transform duration-200 hover:scale-[1.02] hover:shadow-md dark:hover:border-gray-400"
              >
                <h2 className="text-xl font-semibold group-hover:text-[#54336c] transition-colors mb-2">
                  {blog.title}
                </h2>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                  {blog.excerpt}
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {blog.categories.map((cat) => (
                    <span
                      key={cat}
                      className="px-3 py-1 text-xs border border-gray-300 dark:border-gray-500 rounded-full text-gray-600 dark:text-gray-300"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
                <time className="block text-xs text-gray-500 dark:text-gray-400">
                  {formattedDate}
                </time>
              </a>
            );
          })
        )}
      </div>
    </section>
  );
}
