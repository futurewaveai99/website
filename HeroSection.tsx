import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import founderPortrait from '@/assets/founder-portrait.jpg';
import BookingModal from '@/components/BookingModal';
import { useState } from 'react';

const HeroSection = () => {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  return (
    <main>
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card/50 to-background">
        {/* Subtle animated elements */}
        <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/6 w-96 h-96 bg-accent/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">

        {/* Founder Portrait */}
        <div className="mb-8 animate-fade-in delay-200">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-lg opacity-30 animate-pulse"></div>
            <img 
              src={founderPortrait} 
              alt="Futurewave AI Founder" 
              className="relative w-80 h-60 object-cover rounded-3xl border-2 border-primary/20 shadow-glow-primary"
            />
          </div>
        </div>

        {/* Company Name */}
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 animate-fade-in delay-300">
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            Futurewave AI
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in delay-400">
          The future is ready for us, are we ready for us?
        </p>

        {/* Main Headline */}
        <h2 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight animate-fade-in delay-500">
          AI Solutions & Digital{' '}
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            Innovation Expert!
          </span>
        </h2>

        {/* Stats/Achievements */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-600">
          Specializing in AI voice agents, intelligent chatbots, stunning websites, and persuasive UGC ads | 
          Delivering cutting-edge solutions that drive real business results
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 animate-fade-in delay-700">
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 text-lg px-8 py-4 h-auto font-medium"
            onClick={() => setBookingModalOpen(true)}
          >
            Book a Call
            <ArrowRight className="ml-2" size={20} />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="text-lg px-8 py-4 h-auto border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            See Our Services
          </Button>
        </div>

        {/* Client Logos Section */}
        <div className="animate-fade-in delay-800">
          <p className="text-sm text-muted-foreground mb-6 font-medium">Trusted by innovative businesses:</p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            <div className="text-2xl font-bold text-primary/40">TechCorp</div>
            <div className="text-2xl font-bold text-primary/40">InnovateLab</div>
            <div className="text-2xl font-bold text-primary/40">FutureTech</div>
            <div className="text-2xl font-bold text-primary/40">AIStudio</div>
          </div>
        </div>
      </div>
      </section>
      
      <BookingModal 
        open={bookingModalOpen}
        onOpenChange={setBookingModalOpen}
      />
    </main>
  );
};

export default HeroSection;