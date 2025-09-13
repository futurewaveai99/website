import { useState, useEffect } from 'react';
import { Brain } from 'lucide-react';

const DailyAIFact = () => {
  const [currentFact, setCurrentFact] = useState('');

  const aiFacts = [
    "AI can now generate human-like text, but it still can't truly understand emotions the way humans do.",
    "The first AI program was written in 1951 and could play checkers better than most humans within a few years.",
    "AI algorithms can detect diseases in medical scans with accuracy rates exceeding 90% in many cases.",
    "Machine learning models require millions of data points to achieve human-level performance on simple tasks.",
    "AI chatbots process over 50 billion messages per day across all platforms worldwide.",
    "Deep learning neural networks are inspired by the structure of the human brain but work very differently.",
    "AI can now create original music compositions that are indistinguishable from human-made music.",
    "Computer vision AI can identify objects in images faster than the human eye can process them.",
    "Natural Language Processing AI can translate between languages in real-time with 95%+ accuracy.",
    "AI recommendation systems influence over 35% of consumer purchases on major e-commerce platforms."
  ];

  useEffect(() => {
    // Get day of year to ensure the same fact shows for the entire day
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now.getTime() - start.getTime();
    const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    // Use day of year to pick a consistent fact for the day
    const factIndex = dayOfYear % aiFacts.length;
    setCurrentFact(aiFacts[factIndex]);
  }, []);

  if (!currentFact) return null;

  return (
    <div className="relative group max-w-2xl mx-auto mb-8">
      {/* Glass morphism card */}
      <div className="relative bg-card/40 backdrop-blur-glass border border-primary/20 rounded-2xl p-6 shadow-glass group-hover:shadow-glow-subtle transition-all duration-500">
        {/* Gradient border effect */}
        <div className="absolute inset-0 bg-gradient-border rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
        
        <div className="flex items-start gap-4">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary rounded-lg blur opacity-75"></div>
            <div className="relative bg-gradient-primary p-2 rounded-lg">
              <Brain className="h-5 w-5 text-background" />
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-display font-semibold text-primary mb-2 tracking-wide uppercase">
              AI Insight of the Day
            </h3>
            <p className="text-sm text-foreground/80 leading-relaxed">{currentFact}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyAIFact;