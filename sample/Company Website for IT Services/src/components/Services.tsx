import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { 
  Smartphone, 
  Globe, 
  Code, 
  Database, 
  Cloud, 
  Shield,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';

const services = [
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android',
    image: 'https://images.unsplash.com/photo-1624298696100-a6aae4884881?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NTY1NTg2OTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['React Native', 'Flutter', 'iOS/Android Native', 'Cross-platform'],
    pricing: 'Starting from $2,999',
    color: 'text-blue-500'
  },
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Modern, responsive websites and web applications built with latest technologies',
    image: 'https://images.unsplash.com/photo-1695891689981-0be360e84d3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHRlYW0lMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc1NjYzNzYyN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['React/Next.js', 'Vue.js', 'Node.js', 'E-commerce'],
    pricing: 'Starting from $1,999',
    color: 'text-green-500'
  },
  {
    icon: Code,
    title: 'Custom Software',
    description: 'Tailored software solutions to meet your specific business requirements',
    image: 'https://images.unsplash.com/photo-1593086784152-b060f8109e0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGVuZ2luZWVyaW5nJTIwY29kZSUyMHNjcmVlbnxlbnwxfHx8fDE3NTY2Mzc2Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Desktop Apps', 'APIs', 'Integrations', 'Cloud Solutions'],
    pricing: 'Starting from $4,999',
    color: 'text-purple-500'
  }
];

const additionalServices = [
  {
    icon: Database,
    title: 'Database Design',
    description: 'Scalable database architecture and optimization'
  },
  {
    icon: Cloud,
    title: 'Cloud Migration',
    description: 'Seamless transition to cloud infrastructure'
  },
  {
    icon: Shield,
    title: 'Security Audits',
    description: 'Comprehensive security assessment and implementation'
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">Our Services</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Comprehensive IT Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From concept to deployment, we provide end-to-end development services 
            that drive business growth and digital transformation.
          </p>
        </motion.div>

        {/* Main Services */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow group cursor-pointer">
                <div className="relative overflow-hidden rounded-t-lg">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="bg-background/90 backdrop-blur-sm rounded-lg p-2">
                      <service.icon className={`h-6 w-6 ${service.color}`} />
                    </div>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {service.title}
                    <Badge variant="secondary">{service.pricing}</Badge>
                  </CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button className="w-full group">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center mb-8">Additional Services</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4 p-6 bg-background rounded-lg border border-border hover:shadow-md transition-shadow"
              >
                <div className="bg-primary/10 rounded-lg p-3">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">{service.title}</h4>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}