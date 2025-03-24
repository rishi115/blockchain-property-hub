
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import FeaturedProperties from '@/components/FeaturedProperties';
import { Sparkles, ShieldCheck, BarChart, Wallet } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Index = () => {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FeaturedProperties />
        <BlockchainSection />
        <StatsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

const BlockchainSection = () => {
  const features = [
    {
      title: 'Verified Ownership',
      description: 'Property ownership is verified and recorded on the blockchain, eliminating fraud and providing unprecedented transparency.',
      icon: ShieldCheck,
      delay: '0ms'
    },
    {
      title: 'Smart Contracts',
      description: 'Automated agreements streamline transactions, reducing paperwork and ensuring terms are executed exactly as agreed.',
      icon: Sparkles,
      delay: '150ms'
    },
    {
      title: 'Transparent History',
      description: 'Full property history is immutably recorded, giving buyers complete confidence in their investment.',
      icon: BarChart,
      delay: '300ms'
    },
    {
      title: 'Secure Payments',
      description: 'Blockchain-powered transactions eliminate intermediaries and reduce costs while providing enhanced security.',
      icon: Wallet,
      delay: '450ms'
    }
  ];

  return (
    <section className="py-24 px-6 md:px-8 bg-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 bg-secondary rounded-full text-primary text-xs font-medium mb-4">
            Blockchain Technology
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-5">How Blockchain Transforms Real Estate</h2>
          <p className="text-muted-foreground text-lg">
            We're leveraging the power of blockchain to create a more secure, transparent, and efficient real estate marketplace.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-background p-6 rounded-xl border border-border/50 hover:shadow-md transition-all duration-300"
              style={{ 
                animationDelay: feature.delay,
                opacity: 0,
                animation: 'fade-up 0.6s ease-out forwards' 
              }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const StatsSection = () => {
  const stats = [
    { value: '10K+', label: 'Properties' },
    { value: '$2B+', label: 'Transaction Volume' },
    { value: '30K+', label: 'Happy Customers' },
    { value: '100%', label: 'Secure Transactions' }
  ];

  return (
    <section className="py-20 px-6 md:px-8 bg-primary">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={cn(
                "text-center py-8",
                index !== stats.length - 1 && "border-r border-white/10"
              )}
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-white/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="py-24 px-6 md:px-8 bg-background">
      <div className="container mx-auto">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary to-primary/80 p-10 md:p-16">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/3 blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Experience the Future of Real Estate?</h2>
            <p className="text-white/80 text-lg mb-8">
              Join thousands of satisfied buyers and sellers who have discovered the security and transparency of blockchain-powered property transactions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="default" asChild className="bg-white text-primary hover:bg-white/90">
                <Link to="/properties">Browse Properties</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="bg-transparent border-white text-white hover:bg-white/10">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
