import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { 
  Users, 
  Trophy, 
  Clock, 
  Target,
  Award,
  Lightbulb
} from 'lucide-react';
import { motion } from 'motion/react';

const stats = [
  {
    icon: Users,
    value: '50+',
    label: 'Expert Developers',
    color: 'text-blue-500'
  },
  {
    icon: Trophy,
    value: '150+',
    label: 'Projects Delivered',
    color: 'text-green-500'
  },
  {
    icon: Clock,
    value: '5+',
    label: 'Years Experience',
    color: 'text-purple-500'
  },
  {
    icon: Target,
    value: '98%',
    label: 'Success Rate',
    color: 'text-orange-500'
  }
];

const skills = [
  { name: 'Frontend Development', percentage: 95 },
  { name: 'Backend Development', percentage: 90 },
  { name: 'Mobile Development', percentage: 88 },
  { name: 'DevOps & Cloud', percentage: 85 },
  { name: 'UI/UX Design', percentage: 82 }
];

const values = [
  {
    icon: Clock,
    title: '3-Day Delivery',
    description: 'Our unique system cuts time by 75% without cutting quality.'
  },
  {
    icon: Award,
    title: 'Ultra-Affordable',
    description: 'Premium development from $250. No hidden fees.'
  },
  {
    icon: Lightbulb,
    title: 'Zero Compromises',
    description: 'Elite engineering means excellence in every project.'
  }
];

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">About Prodivant</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Small Team, Big Impact
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Elite engineers. Focused execution. Exceptional value. We transform your ideas 
            into powerful digital solutions, starting at just $250.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold mb-4">
                Why Choose Prodivant?
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Small team of elite engineers. Beating enterprise agencies on every metric - 
                cost, speed, and value. We combine proprietary systems with deep technical 
                expertise to deliver solutions others can't match.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 dark:bg-green-900/20 rounded-full p-1">
                    <div className="bg-green-500 rounded-full w-2 h-2" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Unique Efficiency System</h4>
                    <p className="text-sm text-muted-foreground">
                      We rely on our proprietary efficiency system, designed to cut unnecessary steps and deliver projects in record time — without sacrificing quality.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 dark:bg-blue-900/20 rounded-full p-1">
                    <div className="bg-blue-500 rounded-full w-2 h-2" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Affordable pricing from $250</h4>
                    <p className="text-sm text-muted-foreground">
                      Ultra-affordable pricing, perfect for startups and solo entrepreneurs.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-purple-100 dark:bg-purple-900/20 rounded-full p-1">
                    <div className="bg-purple-500 rounded-full w-2 h-2" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Most projects delivered in 3 ~ 7 days</h4>
                    <p className="text-sm text-muted-foreground">
                      Speed without compromise — quality is always guaranteed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-6">Our Expertise</h3>
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <div className="flex justify-between">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.percentage}%</span>
                </div>
                <Progress value={skill.percentage} className="h-2" />
              </motion.div>
            ))}
          </motion.div>
        </div>


        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center mb-12">Our Values</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-primary/10 rounded-full p-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}