import { Phone, Globe, Megaphone, VideoIcon, Bot } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ServicesSection = () => {
  const services = [
    {
      icon: Bot,
      title: 'AI Chatbots',
      description: 'Intelligent chatbots that provide instant customer support, lead qualification, and automated responses 24/7.',
      features: ['Instant Responses', 'Lead Qualification', 'Multi-Language Support', 'Easy Integration']
    },
    {
      icon: Phone,
      title: 'AI Voice Calling Agents',
      description: 'Intelligent conversational AI that handles customer service, sales calls, and support with human-like interaction.',
      features: ['24/7 Availability', 'Natural Conversations', 'CRM Integration', 'Call Analytics']
    },
    {
      icon: Globe,
      title: 'Website Development', 
      description: 'Modern, responsive websites built with cutting-edge technology and optimized for performance and conversions.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Analytics Integration']
    },
    {
      icon: Megaphone,
      title: 'AI Product Ads',
      description: 'Data-driven advertising campaigns powered by AI to maximize your ROI and reach your target audience effectively.',
      features: ['AI Targeting', 'A/B Testing', 'Performance Tracking', 'Multi-Platform']
    },
    {
      icon: VideoIcon,
      title: 'AI UGC Ads',
      description: 'Authentic user-generated content ads created and optimized using AI to build trust and drive conversions.',
      features: ['Content Creation', 'Authenticity Analysis', 'Trend Optimization', 'Brand Safety']
    }
  ];

  return (
    <section id="services" className="py-24 px-6 lg:px-8 relative overflow-hidden" role="region" aria-labelledby="services-heading">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-card/50"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 id="services-heading" className="text-4xl md:text-6xl font-display font-bold mb-6">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive AI solutions designed to accelerate your business growth and streamline operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group relative bg-card/40 backdrop-blur-glass border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-glow-subtle">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded-lg transition-all duration-500"></div>
                
                <CardHeader className="relative z-10">
                  <div className="mb-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-primary rounded-xl blur opacity-75"></div>
                      <div className="relative bg-gradient-primary p-3 rounded-xl">
                        <IconComponent className="text-background" size={24} />
                      </div>
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl font-display font-semibold mb-3">
                    <h3>{service.title}</h3>
                  </CardTitle>
                  <CardDescription className="text-base text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 bg-gradient-primary rounded-full mr-3 flex-shrink-0"></div>
                        <span className="text-foreground/80">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;