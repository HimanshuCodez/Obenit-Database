import { useState } from 'react';
import { 
  BookOpen, Download, Code, Video, Users, MessageSquare, 
  FileText, Zap, Search, Filter, ExternalLink, Star,
  Play, Clock, Eye, Heart, ArrowRight, Bookmark
} from 'lucide-react';

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Resources', icon: BookOpen, count: 24 },
    { id: 'documentation', name: 'Documentation', icon: FileText, count: 8 },
    { id: 'tutorials', name: 'Tutorials', icon: Video, count: 6 },
    { id: 'tools', name: 'Tools & SDKs', icon: Code, count: 4 },
    { id: 'downloads', name: 'Downloads', icon: Download, count: 3 },
    { id: 'community', name: 'Community', icon: Users, count: 3 }
  ];

  const resources = [
    {
      id: 1,
      title: "Getting Started Guide",
      description: "Complete beginner's guide to setting up your first Obenit database with step-by-step instructions.",
      category: "documentation",
      type: "Guide",
      duration: "15 min read",
      difficulty: "Beginner",
      views: "2.1k",
      rating: 4.9,
      featured: true,
      tags: ["setup", "beginner", "quickstart"]
    },
    {
      id: 2,
      title: "API Reference Documentation",
      description: "Comprehensive API documentation with examples, endpoints, and authentication methods.",
      category: "documentation",
      type: "Documentation",
      duration: "Reference",
      difficulty: "Advanced",
      views: "5.3k",
      rating: 4.8,
      featured: false,
      tags: ["api", "reference", "integration"]
    },
    {
      id: 3,
      title: "Building Your First Query",
      description: "Learn how to create powerful Obenit queries with real-world examples and best practices.",
      category: "tutorials",
      type: "Video Tutorial",
      duration: "12 min",
      difficulty: "Beginner",
      views: "1.8k",
      rating: 4.7,
      featured: true,
      tags: ["queries", "tutorial", "video"]
    },
    {
      id: 4,
      title: "Python SDK",
      description: "Official Python SDK for Obenit Database with full support for async operations and data streaming.",
      category: "tools",
      type: "SDK",
      duration: "Download",
      difficulty: "Intermediate",
      views: "892",
      rating: 4.9,
      featured: false,
      tags: ["python", "sdk", "development"]
    },
    {
      id: 5,
      title: "Data Migration Toolkit",
      description: "Powerful tools to migrate your existing databases to Obenit Database format with zero downtime.",
      category: "tools",
      type: "Tool",
      duration: "Setup Guide",
      difficulty: "Advanced",
      views: "1.2k",
      rating: 4.6,
      featured: false,
      tags: ["migration", "tools", "database"]
    },
    {
      id: 6,
      title: "Advanced Analytics Workshop",
      description: "Deep dive into Obenit analytics, pattern recognition, and predictive modeling techniques.",
      category: "tutorials",
      type: "Workshop",
      duration: "45 min",
      difficulty: "Advanced",
      views: "743",
      rating: 4.8,
      featured: true,
      tags: ["analytics", "advanced", "workshop"]
    }
  ];

  const quickLinks = [
    { name: "Discord Community", icon: MessageSquare, url: "#", members: "2.5k+" },
    { name: "GitHub Repository", icon: Code, url: "#", stars: "1.2k" },
    { name: "Status Page", icon: Zap, url: "#", status: "All Systems Operational" },
    { name: "Changelog", icon: FileText, url: "#", latest: "v2.1.0" }
  ];

  const featuredDownloads = [
    {
      name: "Obenit Database Desktop",
      version: "v2.1.0",
      size: "45 MB",
      platform: "Windows, macOS, Linux",
      downloads: "12k+"
    },
    {
      name: "CLI Tools",
      version: "v1.8.2",
      size: "8 MB",
      platform: "Cross-platform",
      downloads: "8k+"
    },
    {
      name: "Sample Datasets",
      version: "Latest",
      size: "125 MB",
      platform: "All",
      downloads: "5k+"
    }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesCategory = activeCategory === 'all' || resource.category === activeCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-400 bg-green-500/20';
      case 'Intermediate': return 'text-yellow-400 bg-yellow-500/20';
      case 'Advanced': return 'text-red-400 bg-red-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="text-center">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-6">
              Resources Hub
            </h1>
            <p className="text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
              Everything you need to master Obenit Database. From getting started guides to advanced tutorials,
              we've got you covered on your journey.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50" />
              <input
                type="text"
                placeholder="Search resources, tutorials, tools..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-6 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent text-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-6 space-y-6">
              {/* Categories */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  <Filter className="w-5 h-5 text-purple-400 mr-2" />
                  <h3 className="text-lg font-bold text-white">Categories</h3>
                </div>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`w-full flex items-center justify-between p-3 rounded-lg transition duration-300 ${
                        activeCategory === category.id
                          ? 'bg-purple-500/30 text-white border border-purple-400/50'
                          : 'text-white/70 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center">
                        <category.icon className="w-4 h-4 mr-2" />
                        <span className="text-sm font-medium">{category.name}</span>
                      </div>
                      <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
                <div className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition duration-300 group"
                    >
                      <div className="flex items-center">
                        <link.icon className="w-4 h-4 text-purple-400 mr-3" />
                        <span className="text-white text-sm font-medium">{link.name}</span>
                      </div>
                      <div className="text-xs text-white/60">
                        {link.members || link.stars || link.status || link.latest}
                      </div>
                      <ExternalLink className="w-3 h-3 text-white/40 group-hover:text-white/80 transition duration-300" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Featured Downloads */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <h3 className="text-lg font-bold text-white mb-4">Downloads</h3>
                <div className="space-y-4">
                  {featuredDownloads.map((download, index) => (
                    <div key={index} className="p-4 bg-white/5 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-white font-medium text-sm">{download.name}</h4>
                        <span className="text-xs text-purple-400">{download.version}</span>
                      </div>
                      <div className="text-xs text-white/60 mb-3">
                        <div>{download.platform}</div>
                        <div>{download.size} • {download.downloads} downloads</div>
                      </div>
                      <button className="w-full bg-purple-500/20 hover:bg-purple-500/30 text-purple-400 text-xs py-2 px-3 rounded-lg transition duration-300 flex items-center justify-center space-x-2">
                        <Download className="w-3 h-3" />
                        <span>Download</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Resources */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Featured Resources</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {filteredResources.filter(r => r.featured).slice(0, 2).map((resource) => (
                  <div key={resource.id} className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-lg rounded-2xl p-8 border border-white/30 hover:border-white/50 transition duration-300 group">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <Star className="w-5 h-5 text-yellow-400" />
                        <span className="text-sm font-medium text-yellow-400">Featured</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Eye className="w-4 h-4 text-white/60" />
                        <span className="text-sm text-white/60">{resource.views}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition duration-300">
                      {resource.title}
                    </h3>
                    <p className="text-white/70 mb-4 leading-relaxed">{resource.description}</p>
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span className={`text-xs px-3 py-1 rounded-full ${getDifficultyColor(resource.difficulty)}`}>
                        {resource.difficulty}
                      </span>
                      <span className="text-xs text-white/60 bg-white/10 px-3 py-1 rounded-full">
                        {resource.type}
                      </span>
                      <span className="text-xs text-white/60 bg-white/10 px-3 py-1 rounded-full flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{resource.duration}</span>
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-white font-medium">{resource.rating}</span>
                      </div>
                      <button className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 font-medium transition duration-300">
                        <span>View Resource</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* All Resources */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">
                  {activeCategory === 'all' ? 'All Resources' : categories.find(c => c.id === activeCategory)?.name}
                </h2>
                <span className="text-white/60">
                  {filteredResources.length} resource{filteredResources.length !== 1 ? 's' : ''}
                </span>
              </div>

              <div className="grid gap-6">
                {filteredResources.map((resource) => (
                  <div key={resource.id} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/15 transition duration-300 group">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition duration-300">
                            {resource.title}
                          </h3>
                          {resource.featured && (
                            <Star className="w-4 h-4 text-yellow-400" />
                          )}
                        </div>
                        <p className="text-white/70 mb-3 leading-relaxed">{resource.description}</p>
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          {resource.tags.map((tag, tagIndex) => (
                            <span key={tagIndex} className="text-xs text-purple-300 bg-purple-500/20 px-2 py-1 rounded">
                              #{tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-white/60">
                          <div className="flex items-center space-x-1">
                            <Eye className="w-4 h-4" />
                            <span>{resource.views}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span>{resource.rating}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{resource.duration}</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 md:mt-0 md:ml-6 flex flex-col items-end space-y-2">
                        <span className={`text-xs px-3 py-1 rounded-full ${getDifficultyColor(resource.difficulty)}`}>
                          {resource.difficulty}
                        </span>
                        <span className="text-xs text-white/60 bg-white/10 px-3 py-1 rounded-full">
                          {resource.type}
                        </span>
                        <div className="flex space-x-2">
                          <button className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition duration-300">
                            <Bookmark className="w-4 h-4 text-white/60 hover:text-white" />
                          </button>
                          <button className="flex items-center space-x-2 bg-purple-500/20 hover:bg-purple-500/30 text-purple-400 px-4 py-2 rounded-lg transition duration-300">
                            {resource.type === 'Video Tutorial' ? (
                              <Play className="w-4 h-4" />
                            ) : (
                              <ExternalLink className="w-4 h-4" />
                            )}
                            <span className="text-sm font-medium">
                              {resource.type === 'Video Tutorial' ? 'Watch' : 'View'}
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredResources.length === 0 && (
                <div className="text-center py-12">
                  <div className="text-white/60 mb-4">
                    <Search className="w-12 h-12 mx-auto mb-2" />
                    <p className="text-lg">No resources found</p>
                    <p className="text-sm">Try adjusting your search or filter criteria</p>
                  </div>
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setActiveCategory('all');
                    }}
                    className="text-purple-400 hover:text-purple-300 font-medium"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter CTA */}
      <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-lg border-y border-white/20">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-xl text-white/80 mb-8">
            Get the latest resources, tutorials, and updates delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition duration-300 whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}