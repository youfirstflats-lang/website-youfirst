import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useBlogPosts } from "@/hooks/useBlogPosts";
import { useRef, useState, useEffect } from "react";
import { FadeIn } from "@/components/animations";

export function LatestBlogPosts() {
  const { data: posts, isLoading } = useBlogPosts();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollButtons();
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", checkScrollButtons);
      return () => scrollContainer.removeEventListener("scroll", checkScrollButtons);
    }
  }, [posts]);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 360;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  // Transform database posts to display format
  const blogPosts = posts?.map(post => ({
    id: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    image: post.image_url || 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
    category: post.category,
    date: new Date(post.published_at || post.created_at).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }),
    readTime: post.read_time,
  })) || [];

  if (isLoading) {
    return (
      <section className="section-spacing">
        <div className="container-premium">
          <div className="flex items-center justify-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        </div>
      </section>
    );
  }

  if (blogPosts.length === 0) {
    return null;
  }

  return (
    <section className="section-spacing">
      <div className="container-premium">
        {/* Header */}
        <FadeIn className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-foreground mb-2">Latest Insights</h2>
            <p className="text-muted-foreground">
              Expert tips and market insights for property owners in Qatar.
            </p>
          </div>
          <div className="flex items-center gap-2">
            {/* Scroll Buttons - Desktop */}
            <div className="hidden md:flex items-center gap-2 mr-4">
              <button
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                className="w-10 h-10 rounded-full border-2 border-border hover:border-primary disabled:opacity-30 disabled:hover:border-border flex items-center justify-center transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                className="w-10 h-10 rounded-full border-2 border-border hover:border-primary disabled:opacity-30 disabled:hover:border-border flex items-center justify-center transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            <Button asChild variant="outline" className="shrink-0">
              <Link to="/blog" className="gap-2">
                View All
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </FadeIn>

        {/* Scrollable Cards */}
        <div className="relative -mx-4 sm:-mx-6 lg:mx-0">
          <div
            ref={scrollRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 snap-x snap-mandatory px-4 sm:px-6 lg:px-0 touch-pan-x"
            style={{ 
              scrollbarWidth: "none", 
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch"
            }}
          >
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[340px] snap-start group"
              >
                <Link to={`/blog/${post.id}`} className="block h-full">
                  <div className="bg-background rounded-2xl overflow-hidden border-2 border-primary/20 hover:border-primary/40 shadow-[0_0_15px_rgba(59,130,196,0.08)] hover:shadow-[0_0_25px_rgba(59,130,196,0.15)] transition-all duration-300 h-full flex flex-col">
                    {/* Image */}
                    <div className="aspect-[16/10] overflow-hidden relative">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Category badge */}
                      <span className="absolute top-3 left-3 text-xs font-medium text-white bg-primary/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg">
                        {post.category}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-5 flex flex-col flex-1">
                      {/* Read Time */}
                      <div className="flex items-center gap-1 text-xs text-muted-foreground mb-2">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>

                      {/* Title */}
                      <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-1">
                        {post.excerpt}
                      </p>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-3 border-t border-border/50">
                        <span className="text-xs text-muted-foreground">{post.date}</span>
                        <span className="flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                          Read
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-4 w-4 sm:w-6 lg:w-8 bg-gradient-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-4 w-4 sm:w-6 lg:w-8 bg-gradient-to-l from-background to-transparent pointer-events-none" />
          
          {/* Mobile scroll indicator */}
          <div className="flex justify-center gap-1.5 mt-4 md:hidden">
            {blogPosts.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-primary/30"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
