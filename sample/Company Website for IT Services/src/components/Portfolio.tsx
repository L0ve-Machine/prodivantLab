import { useState } from 'react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';

const projects = {
  mobile: [
    {
      title: 'FinanceTracker Pro',
      description: 'A comprehensive personal finance management mobile app with AI-powered insights.',
      image: 'https://images.unsplash.com/photo-1624298696100-a6aae4884881?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NTY1NTg2OTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      technologies: ['React Native', 'TypeScript', 'Firebase', 'AI/ML'],
      category: 'Mobile App',
      results: {
        users: '50K+',
        rating: '4.8',
        downloads: '100K+'
      }
    },
    {
      title: 'FoodieDelight',
      description: 'Restaurant discovery and food delivery app with real-time tracking.',
      image: 'https://images.unsplash.com/photo-1624298696100-a6aae4884881?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NTY1NTg2OTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      technologies: ['Flutter', 'Dart', 'Google Maps', 'Payment Gateway'],
      category: 'Mobile App',
      results: {
        orders: '25K+',
        restaurants: '500+',
        cities: '15'
      }
    }
  ],
  web: [
    {
      title: 'EcoCommerce Platform',
      description: 'Sustainable e-commerce platform promoting eco-friendly products with carbon footprint tracking.',
      image: 'https://images.unsplash.com/photo-1695891689981-0be360e84d3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHRlYW0lMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc1NjYzNzYyN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      technologies: ['Next.js', 'Stripe', 'PostgreSQL', 'Vercel'],
      category: 'Web Application',
      results: {
        revenue: '$2M+',
        conversion: '3.2%',
        merchants: '200+'
      }
    },
    {
      title: 'HealthHub Dashboard',
      description: 'Healthcare management system for hospitals with patient tracking and analytics.',
      image: 'https://images.unsplash.com/photo-1695891689981-0be360e84d3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHRlYW0lMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc1NjYzNzYyN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Chart.js'],
      category: 'Web Application',
      results: {
        hospitals: '50+',
        patients: '100K+',
        efficiency: '+40%'
      }
    }
  ],
  software: [
    {
      title: 'IntelliCRM',
      description: 'AI-powered customer relationship management system with predictive analytics.',
      image: 'https://images.unsplash.com/photo-1593086784152-b060f8109e0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGVuZ2luZWVyaW5nJTIwY29kZSUyMHNjcmVlbnxlbnwxfHx8fDE3NTY2Mzc2Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      technologies: ['Python', 'Django', 'TensorFlow', 'PostgreSQL'],
      category: 'Enterprise Software',
      results: {
        efficiency: '+60%',
        sales: '+35%',
        satisfaction: '95%'
      }
    },
    {
      title: 'SecureVault',
      description: 'Enterprise-grade document management and security system.',
      image: 'https://images.unsplash.com/photo-1593086784152-b060f8109e0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGVuZ2luZWVyaW5nJTIwY29kZSUyMHNjcmVlbnxlbnwxfHx8fDE3NTY2Mzc2Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      technologies: ['C#', '.NET Core', 'Azure', 'Blockchain'],
      category: 'Enterprise Software',
      results: {
        security: '99.9%',
        compliance: '100%',
        adoption: '85%'
      }
    }
  ]
};

export function Portfolio() {
  const [activeTab, setActiveTab] = useState('mobile');

  return (
    <section id="portfolio" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">Our Portfolio</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our portfolio of successful projects that have helped businesses 
            transform their operations and achieve their digital goals.
          </p>
        </motion.div>

        {/* Portfolio Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12">
              <TabsTrigger value="mobile">Mobile Apps</TabsTrigger>
              <TabsTrigger value="web">Web Applications</TabsTrigger>
              <TabsTrigger value="software">Custom Software</TabsTrigger>
            </TabsList>

            {Object.entries(projects).map(([category, projectList]) => (
              <TabsContent key={category} value={category} className="space-y-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  {projectList.map((project, index) => (
                    <motion.div
                      key={project.title}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      viewport={{ once: true }}
                    >
                      <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
                        <div className="relative overflow-hidden">
                          <ImageWithFallback
                            src={project.image}
                            alt={project.title}
                            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute top-4 left-4">
                            <Badge variant="secondary">{project.category}</Badge>
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="flex space-x-2">
                              <Button size="sm" variant="secondary" className="bg-white/10 backdrop-blur-sm">
                                <ExternalLink className="h-4 w-4 mr-2" />
                                View Live
                              </Button>
                              <Button size="sm" variant="secondary" className="bg-white/10 backdrop-blur-sm">
                                <Github className="h-4 w-4 mr-2" />
                                Code
                              </Button>
                            </div>
                          </div>
                        </div>

                        <CardHeader>
                          <CardTitle>{project.title}</CardTitle>
                          <CardDescription>{project.description}</CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-4">
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <Badge key={tech} variant="outline" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>

                          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                            {Object.entries(project.results).map(([key, value]) => (
                              <div key={key} className="text-center">
                                <div className="font-semibold text-primary">{value}</div>
                                <div className="text-xs text-muted-foreground capitalize">{key}</div>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your ideas into reality. 
            Get a free consultation and project estimate today.
          </p>
          <Button size="lg" className="group">
            Start Your Project
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}