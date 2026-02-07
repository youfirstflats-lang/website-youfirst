import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { BlogPost } from "@/lib/blog-data";

interface BlogCardProps {
  post: BlogPost;
  index?: number;
}

export function BlogCard({ post, index = 0 }: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group"
    >
      <Link to={`/blog/${post.id}`} className="block">
        <div className="bg-background rounded-2xl overflow-hidden border-2 border-primary/20 hover:border-primary/40 shadow-[0_0_15px_rgba(59,130,196,0.08)] hover:shadow-[0_0_25px_rgba(59,130,196,0.15)] transition-all duration-400">
          {/* Image */}
          <div className="aspect-[16/10] overflow-hidden relative">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Floating category badge */}
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="absolute top-4 left-4 text-xs font-medium text-white bg-primary/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg"
            >
              {post.category}
            </motion.span>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Read Time */}
            <div className="flex items-center gap-1 text-xs text-muted-foreground mb-3">
              <Clock className="w-3 h-3" />
              {post.readTime}
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2">
              {post.title}
            </h3>

            {/* Excerpt */}
            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
              {post.excerpt}
            </p>

            {/* Footer */}
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">{post.date}</span>
              <span className="flex items-center gap-1 text-sm font-medium text-primary translate-x-0 group-hover:translate-x-1 transition-transform duration-300">
                Read More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
