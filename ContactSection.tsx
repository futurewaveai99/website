import { Calendar, MessageSquare, Phone, Mail, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import BookingModal from '@/components/BookingModal';
import { useState } from 'react';

const ContactSection = () => {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  return (
    <section id="contact" className="py-24 px-6 lg:px-8 relative overflow-hidden" role="region" aria-labelledby="contact-heading">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card/20 to-background">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 id="contact-heading" className="text-4xl md:text-6xl font-display font-bold mb-6">
            Ready to <span className="bg-gradient-primary bg-clip-text text-transparent">Get Started?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Let's discuss how our AI solutions can transform your business. Choose the best way to connect with us.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Methods */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="bg-card/40 backdrop-blur-glass border-primary/20 hover:border-primary/40 transition-all duration-500 group">
              <CardHeader>
                <CardTitle className="flex items-center text-lg group-hover:text-primary transition-colors duration-300">
                  <div className="relative mr-3">
                    <div className="absolute inset-0 bg-gradient-primary rounded-lg blur opacity-75"></div>
                    <div className="relative bg-gradient-primary p-2 rounded-lg">
                      <Calendar className="text-background" size={20} />
                    </div>
                  </div>
                  Book Consultation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  Schedule a free 30-minute consultation to discuss your AI needs and explore possibilities.
                </p>
                <Button 
                  className="w-full bg-card/50 border border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 backdrop-blur-sm" 
                  variant="outline"
                  onClick={() => setBookingModalOpen(true)}
                >
                  Schedule Meeting
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card/40 backdrop-blur-glass border-primary/20 hover:border-primary/40 transition-all duration-500 group">
              <CardHeader>
                <CardTitle className="flex items-center text-lg group-hover:text-primary transition-colors duration-300">
                  <div className="relative mr-3">
                    <div className="absolute inset-0 bg-gradient-primary rounded-lg blur opacity-75"></div>
                    <div className="relative bg-gradient-primary p-2 rounded-lg">
                      <Phone className="text-background" size={20} />
                    </div>
                  </div>
                  Call Us Direct
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3 text-sm">
                  Ready to talk? Give us a call during business hours.
                </p>
                <p className="font-semibold text-primary">+1 (514) 444-9762</p>
              </CardContent>
            </Card>

            <Card className="bg-card/40 backdrop-blur-glass border-primary/20 hover:border-primary/40 transition-all duration-500 group">
              <CardHeader>
                <CardTitle className="flex items-center text-lg group-hover:text-primary transition-colors duration-300">
                  <div className="relative mr-3">
                    <div className="absolute inset-0 bg-gradient-primary rounded-lg blur opacity-75"></div>
                    <div className="relative bg-gradient-primary p-2 rounded-lg">
                      <Mail className="text-background" size={20} />
                    </div>
                  </div>
                  Email Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3 text-sm">
                  Prefer email? We'll respond within 24 hours.
                </p>
                <p className="font-semibold text-primary">futurewaveai99@gmail.com</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-card/40 backdrop-blur-glass border-primary/20 hover:border-primary/40 transition-all duration-500">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <div className="relative mr-3">
                    <div className="absolute inset-0 bg-gradient-primary rounded-lg blur opacity-75"></div>
                    <div className="relative bg-gradient-primary p-2 rounded-lg">
                      <MessageSquare className="text-background" size={20} />
                    </div>
                  </div>
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6" role="form" aria-label="Contact form">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium mb-2 text-foreground/80">First Name</label>
                      <Input 
                        id="firstName"
                        name="firstName"
                        placeholder="John" 
                        className="bg-background/50 border-primary/20 focus:border-primary/50 transition-colors duration-300"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium mb-2 text-foreground/80">Last Name</label>
                      <Input 
                        id="lastName"
                        name="lastName"
                        placeholder="Doe" 
                        className="bg-background/50 border-primary/20 focus:border-primary/50 transition-colors duration-300"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground/80">Email</label>
                    <Input 
                      id="email"
                      name="email"
                      type="email" 
                      placeholder="john@company.com" 
                      className="bg-background/50 border-primary/20 focus:border-primary/50 transition-colors duration-300"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2 text-foreground/80">Company</label>
                    <Input 
                      id="company"
                      name="company"
                      placeholder="Your Company Name" 
                      className="bg-background/50 border-primary/20 focus:border-primary/50 transition-colors duration-300"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-2 text-foreground/80">Service Interest</label>
                    <select 
                      id="service"
                      name="service" 
                      className="w-full px-3 py-2 bg-background/50 border border-primary/20 rounded-md focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors duration-300 text-foreground"
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="chatbots">AI Chatbots</option>
                      <option value="voice-agents">AI Voice Calling Agents</option>
                      <option value="website">Website Development</option>
                      <option value="ai-ads">AI Product Ads</option>
                      <option value="ugc-ads">AI UGC Ads</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground/80">Message</label>
                    <Textarea 
                      id="message"
                      name="message"
                      placeholder="Tell us about your project and how we can help..."
                      className="min-h-[120px] bg-background/50 border-primary/20 focus:border-primary/50 transition-colors duration-300"
                      required
                    />
                  </div>
                  
                  <Button 
                    className="w-full bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 text-lg py-6 h-auto" 
                    size="lg"
                    onClick={() => window.open('https://form.typeform.com/to/EinuyXWE', '_blank')}
                  >
                    <Send className="mr-2" size={20} />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <BookingModal 
        open={bookingModalOpen}
        onOpenChange={setBookingModalOpen}
      />
    </section>
  );
};

export default ContactSection;