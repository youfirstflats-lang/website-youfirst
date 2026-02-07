import { useAuth } from '@/hooks/useAuth';
import { useBlogPosts } from '@/hooks/useBlogPosts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { FileText, Settings, MessageSquare, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AdminDashboard() {
  const { user } = useAuth();
  const { data: posts } = useBlogPosts(true);

  const publishedPosts = posts?.filter(p => p.status === 'published').length ?? 0;
  const draftPosts = posts?.filter(p => p.status === 'draft').length ?? 0;

  const stats = [
    {
      title: 'Published Posts',
      value: publishedPosts,
      icon: FileText,
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
      link: '/admin/blogs',
    },
    {
      title: 'Draft Posts',
      value: draftPosts,
      icon: FileText,
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-500/10',
      link: '/admin/blogs',
    },
    {
      title: 'Total Posts',
      value: posts?.length ?? 0,
      icon: TrendingUp,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      link: '/admin/blogs',
    },
  ];

  const quickLinks = [
    { title: 'Manage Blogs', description: 'Create, edit and publish blog posts', icon: FileText, link: '/admin/blogs' },
    { title: 'Site Settings', description: 'Update WhatsApp, contact info, and more', icon: Settings, link: '/admin/settings' },
    { title: 'Contact Submissions', description: 'View contact form submissions', icon: MessageSquare, link: '/admin/contacts' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground mt-1">
          Welcome back, {user?.email}
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-3">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link to={stat.link}>
              <Card className="hover:shadow-medium transition-shadow cursor-pointer">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </CardTitle>
                  <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                    <stat.icon className={`h-4 w-4 ${stat.color}`} />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{stat.value}</div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Quick Links */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {quickLinks.map((link, index) => (
            <motion.div
              key={link.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <Link to={link.link}>
                <Card className="h-full hover:shadow-medium hover:border-primary/30 transition-all cursor-pointer">
                  <CardHeader>
                    <div className="p-3 w-fit rounded-xl bg-primary/10 mb-2">
                      <link.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{link.title}</CardTitle>
                    <CardDescription>{link.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
