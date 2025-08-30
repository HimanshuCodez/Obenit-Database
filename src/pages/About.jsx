import { Database, Target, Lightbulb, Users, Zap, Shield, Globe, Sparkles } from 'lucide-react';

export default function AboutPage() {
  const features = [
    {
      icon: Database,
      title: "Comprehensive Storage",
      description: "Store and organize vast amounts of essence data with intelligent categorization and advanced search capabilities."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance ensures instant access to your essence data, no matter how large your database grows."
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Enterprise-grade security with end-to-end encryption keeps your valuable essence information protected."
    },
    {
      icon: Globe,
      title: "Global Access",
      description: "Access your essence database from anywhere in the world with our cloud-based infrastructure."
    }
  ];

  const team = [
    {
      name: "Alex Chen",
      role: "Lead Developer",
      bio: "Full-stack developer with 8+ years experience in database systems and AI integration.",
      color: "from-purple-400 to-purple-600"
    },
    {
      name: "Sarah Martinez",
      role: "Data Scientist",
      bio: "PhD in Computer Science, specializing in data analysis and machine learning algorithms.",
      color: "from-blue-400 to-blue-600"
    },
    {
      name: "Michael Kim",
      role: "UX Designer",
      bio: "Award-winning designer focused on creating intuitive interfaces for complex data systems.",
      color: "from-green-400 to-green-600"
    }
  ];

  const milestones = [
    { year: "2023", event: "Project conception and initial research phase", status: "completed" },
    { year: "2024", event: "Alpha version released with core functionality", status: "completed" },
    { year: "2024", event: "Beta testing with select partners", status: "current" },
    { year: "2025", event: "Public release and scaling infrastructure", status: "upcoming" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20"></div>
        <div className="relative max-w-6xl mx-auto px-6 py-20">
          <div className="text-center">
            <div className="inline-flex items-center space-x-3 mb-6">
            
              <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Essence Database
              </h1>
            </div>
            <p className="text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
              Revolutionizing how we capture, store, and analyze the fundamental essence of data. 
              Building the future of intelligent information management.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-lg rounded-full px-6 py-3 border border-white/20">
                <span className="text-white font-medium">🚀 Currently in Beta</span>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-full px-6 py-3 border border-white/20">
                <span className="text-white font-medium">🎯 50+ Beta Users</span>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-full px-6 py-3 border border-white/20">
                <span className="text-white font-medium">⚡ 99.9% Uptime</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center mb-6">
              <Target className="w-8 h-8 text-purple-400 mr-4" />
              <h2 className="text-4xl font-bold text-white">Our Mission</h2>
            </div>
            <p className="text-xl text-white/80 mb-6 leading-relaxed">
              We believe that every piece of data has an essence - a core identity that defines its true value and potential. 
              Our mission is to create the most advanced database system that doesn't just store information, but understands it.
            </p>
            <p className="text-lg text-white/70 leading-relaxed">
              By combining cutting-edge machine learning with intuitive design, we're building a platform that makes 
              complex data relationships visible and actionable for researchers, businesses, and innovators worldwide.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Lightbulb className="w-6 h-6 text-yellow-400 mt-1" />
                <div>
                  <h3 className="text-white font-semibold text-lg">Innovation</h3>
                  <p className="text-white/70">Pushing the boundaries of what's possible with data</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Users className="w-6 h-6 text-green-400 mt-1" />
                <div>
                  <h3 className="text-white font-semibold text-lg">Community</h3>
                  <p className="text-white/70">Building together with our users and partners</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Shield className="w-6 h-6 text-blue-400 mt-1" />
                <div>
                  <h3 className="text-white font-semibold text-lg">Trust</h3>
                  <p className="text-white/70">Maintaining the highest standards of security and privacy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">What Makes Us Different</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            We've reimagined database technology from the ground up, focusing on the essence of your data
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition duration-300">
              <feature.icon className="w-10 h-10 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-white/70 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Our Journey</h2>
          <p className="text-xl text-white/80">From concept to reality - here's how we're building the future</p>
        </div>
        <div className="space-y-8">
          {milestones.map((milestone, index) => (
            <div key={index} className="flex items-center space-x-6">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl ${
                milestone.status === 'completed' ? 'bg-green-500' :
                milestone.status === 'current' ? 'bg-yellow-500' : 'bg-gray-500/50'
              }`}>
                {milestone.year}
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="text-xl font-bold text-white">{milestone.event}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    milestone.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                    milestone.status === 'current' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-gray-500/20 text-gray-400'
                  }`}>
                    {milestone.status.charAt(0).toUpperCase() + milestone.status.slice(1)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Meet the Team</h2>
          <p className="text-xl text-white/80">The passionate individuals behind Essence Database</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center">
              <div className={`w-24 h-24 bg-gradient-to-r ${member.color} rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold`}>
                {member.name.split(' ').map(n => n[0]).join('')}
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
              <p className="text-purple-400 font-medium mb-4">{member.role}</p>
              <p className="text-white/70 leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white/5 backdrop-blur-lg border-y border-white/20">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">1M+</div>
              <div className="text-white/80">Data Points Processed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">50+</div>
              <div className="text-white/80">Beta Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-white/80">Uptime</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">24/7</div>
              <div className="text-white/80">Support Available</div>
            </div>
          </div>
        </div>
      </div>

  
    </div>
  );
}