import { Button } from './ui/button';
import { Input } from './ui/input';
import { Separator } from './ui/separator';
import { 
  Code, 
  Mail, 
  Phone, 
  MapPin,
  Github,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight
} from 'lucide-react';

const footerSections = [
  {
    title: 'Services',
    links: [
      { name: 'Mobile App Development', href: '#services' },
      { name: 'Web Development', href: '#services' },
      { name: 'Custom Software', href: '#services' },
      { name: 'Database Design', href: '#services' },
      { name: 'Cloud Migration', href: '#services' },
      { name: 'Security Audits', href: '#services' }
    ]
  },
  {
    title: 'Company',
    links: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Team', href: '#about' },
      { name: 'Careers', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'News', href: '#' },
      { name: 'Contact', href: '#contact' }
    ]
  },
  {
    title: 'Resources',
    links: [
      { name: 'Documentation', href: '#' },
      { name: 'Help Center', href: '#' },
      { name: 'API Reference', href: '#' },
      { name: 'Case Studies', href: '#portfolio' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' }
    ]
  }
];

const socialLinks = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' }
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <img src="/prodivant-high-resolution-logo-transparent.png" alt="Prodivant" className="h-8 w-auto filter brightness-200 contrast-200" style={{filter: 'brightness(0) invert(1)'}} />
                </div>
              </div>
              
              <p className="text-primary-foreground/80 max-w-md">
                Transforming ideas into powerful digital solutions. We specialize in mobile apps, 
                web development, and custom software that drives business growth.
              </p>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-primary-foreground/60" />
                  <span className="text-sm text-primary-foreground/80">prodivant.jp@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-4 w-4 text-primary-foreground/60" />
                  <span className="text-sm text-primary-foreground/80">Osaka, Japan</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg p-2 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Navigation */}
            {footerSections.map((section) => (
              <div key={section.title} className="space-y-4">
                <h4 className="font-semibold text-primary-foreground">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-8 border-t border-primary-foreground/10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
              <p className="text-primary-foreground/70">
                Get the latest tech insights, project showcases, and industry trends delivered to your inbox.
              </p>
            </div>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
              />
              <Button 
                variant="secondary" 
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 group"
              >
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>

        <Separator className="bg-primary-foreground/10" />

        {/* Bottom Footer */}
        <div className="py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-primary-foreground/60">
              © 2025 Prodivant. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}