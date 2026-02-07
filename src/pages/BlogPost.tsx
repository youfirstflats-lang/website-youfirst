import { useParams, Link, Navigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { FadeIn, ScaleIn } from "@/components/animations";
import { useBlogPost, useBlogPosts } from "@/hooks/useBlogPosts";
import { BlogCard } from "@/components/BlogCard";
import { ArrowLeft, Clock, User, Calendar, Loader2 } from "lucide-react";
import { SectionDivider } from "@/components/SectionDivider";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const { data: post, isLoading, error } = useBlogPost(slug || '');
  const { data: allPosts } = useBlogPosts();

  if (isLoading) {
    return (
      <Layout>
        <div className="flex items-center justify-center py-32">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      </Layout>
    );
  }

  if (!post || error) {
    return <Navigate to="/blog" replace />;
  }

  // Format post data
  const formattedPost = {
    ...post,
    image: post.image_url || 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
    date: new Date(post.published_at || post.created_at).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }),
    readTime: post.read_time,
  };

  // Get related posts (exclude current)
  const relatedPosts = allPosts
    ?.filter(p => p.slug !== post.slug)
    .slice(0, 2)
    .map(p => ({
      id: p.slug,
      title: p.title,
      excerpt: p.excerpt,
      content: p.content,
      image: p.image_url || 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
      category: p.category,
      author: p.author,
      date: new Date(p.published_at || p.created_at).toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      }),
      readTime: p.read_time,
    })) || [];

  return (
    <Layout>
      {/* Hero Image */}
      <section className="pt-6 md:pt-8 lg:pt-12">
        <div className="container-premium">
          <FadeIn>
            <Button asChild variant="ghost" className="mb-6 gap-2">
              <Link to="/blog">
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>
            </Button>
          </FadeIn>

          <ScaleIn>
            <div className="rounded-3xl overflow-hidden aspect-[21/9] mb-8">
              <img
                src={formattedPost.image}
                alt={formattedPost.title}
                className="w-full h-full object-cover"
              />
            </div>
          </ScaleIn>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16 md:pb-24">
        <div className="container-premium">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-1.5 rounded-full">
                  {formattedPost.category}
                </span>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  {formattedPost.readTime}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  {formattedPost.date}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <User className="w-4 h-4" />
                  {formattedPost.author}
                </div>
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
                {formattedPost.title}
              </h1>

              {/* Excerpt */}
              <p className="text-xl text-muted-foreground leading-relaxed mb-8 pb-8 border-b border-border">
                {formattedPost.excerpt}
              </p>

              {/* Content */}
              <div 
                className="prose prose-lg max-w-none
                  prose-headings:text-foreground prose-headings:font-semibold
                  prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
                  prose-p:text-muted-foreground prose-p:leading-relaxed
                  prose-ul:text-muted-foreground prose-ul:my-4
                  prose-li:my-1
                  prose-strong:text-foreground"
                dangerouslySetInnerHTML={{ __html: formattedPost.content }}
              />

              {/* CTA */}
              <div className="mt-12 p-8 bg-secondary/30 rounded-2xl text-center">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Need Professional Property Management?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Let YouFirst handle your furnished flat with expertise and care.
                </p>
                <Button asChild size="lg">
                  <Link to="/contact">Get in Touch</Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <>
          <SectionDivider variant="gradient" />
          <section className="section-spacing">
            <div className="container-premium">
              <FadeIn className="text-center mb-12">
                <h2 className="text-foreground mb-4">Related Articles</h2>
                <p className="text-lg text-muted-foreground">
                  Continue exploring our insights and resources.
                </p>
              </FadeIn>

              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {relatedPosts.map((relatedPost, index) => (
                  <BlogCard key={relatedPost.id} post={relatedPost} index={index} />
                ))}
              </div>
            </div>
          </section>
        </>
      )}
    </Layout>
  );
}
