import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { BlogCard } from "@/components/BlogCard";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations";
import { useBlogPosts } from "@/hooks/useBlogPosts";
import { SectionDivider } from "@/components/SectionDivider";
import { PageHeroSkeleton, BlogCardsSkeleton } from "@/components/skeletons";
import { Skeleton } from "@/components/ui/skeleton";

import heroBlog from "@/assets/hero-blog.jpg";

export default function Blog() {
  const { data: posts, isLoading } = useBlogPosts();

  if (isLoading) {
    return (
      <Layout>
        <PageHeroSkeleton />

        <section className="py-16 md:py-24">
          <div className="container-premium">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
              <Skeleton className="h-10 w-48 mx-auto" />
              <Skeleton className="h-5 w-full max-w-md mx-auto" />
            </div>
            <BlogCardsSkeleton count={6} />
          </div>
        </section>

        <SectionDivider variant="gradient" />

        <section className="section-spacing">
          <div className="container-premium">
            <div className="text-center max-w-2xl mx-auto space-y-4">
              <Skeleton className="h-10 w-72 mx-auto" />
              <Skeleton className="h-5 w-full max-w-md mx-auto" />
              <Skeleton className="h-14 w-48 mx-auto rounded-full mt-4" />
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  // Transform database posts to match BlogCard expected format
  const blogPosts = posts?.map(post => ({
    id: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    content: post.content,
    image: post.image_url || 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
    category: post.category,
    author: post.author,
    date: new Date(post.published_at || post.created_at).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }),
    readTime: post.read_time,
  })) || [];

  return (
    <Layout>
      {/* Hero Section */}
      <PageHero
        backgroundImage={heroBlog}
        title="Insights & Resources"
        subtitle="Expert advice, market insights, and practical tips for property owners and investors in Qatar."
        badge="Our Blog"
      >
        <Button asChild size="lg" className="h-12 px-8">
          <Link to="/contact">Get Expert Advice</Link>
        </Button>
      </PageHero>

      {/* Blog Posts Grid */}
      <section className="py-16 md:py-24">
        <div className="container-premium">
          <FadeIn className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-foreground mb-4">Latest Articles</h2>
            <p className="text-lg text-muted-foreground">
              Stay informed with our latest insights on property management,
              investment strategies, and Qatar's real estate market.
            </p>
          </FadeIn>

          {blogPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <BlogCard key={post.id} post={post} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No blog posts published yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>

      <SectionDivider variant="gradient" />

      {/* Newsletter / CTA Section */}
      <section className="section-spacing">
        <div className="container-premium">
          <FadeIn className="text-center max-w-2xl mx-auto">
            <h2 className="text-foreground mb-4">
              Have Questions About Your Property?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our team of property management experts is ready to help you
              maximize your investment and achieve your goals.
            </p>
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">Contact Us Today</Link>
            </Button>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
}
