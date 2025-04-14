
import React from 'react';
import { ShieldAlert, Shield, VoteIcon, BarChart3, Clock, ShieldCheck, Database, Zap } from 'lucide-react';

const WhyItWorks = () => {
  return (
    <section id="vision" className="py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="section-title">From Broken Democracy to Bold Governance</h2>
          <p className="section-subtitle">
            Our model reinvents African governance from first principles,
            replacing outdated systems with ethical, technology-enabled leadership.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="glass-panel p-6 md:p-8 rounded-xl">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-afrigov-earth-terracotta">
              <ShieldAlert className="w-6 h-6" />
              <span>Old Model</span>
            </h3>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center text-red-500">
                  <VoteIcon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Popularity-Based Elections</h4>
                  <p className="text-sm text-muted-foreground">Leadership determined by campaign funding and popularity rather than competence.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center text-red-500">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Inefficient Resource Allocation</h4>
                  <p className="text-sm text-muted-foreground">Budgets determined by political influence rather than data-driven needs.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center text-red-500">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Delayed Decision Making</h4>
                  <p className="text-sm text-muted-foreground">Bureaucratic processes slow response to community needs and crises.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="glass-panel p-6 md:p-8 rounded-xl">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-afrigov-earth-green">
              <ShieldCheck className="w-6 h-6" />
              <span>New Model</span>
            </h3>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center text-green-600">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Ethics & Merit-Based Leadership</h4>
                  <p className="text-sm text-muted-foreground">Council positions earned through expertise, character, and community trust.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center text-green-600">
                  <Database className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Data-Driven Governance</h4>
                  <p className="text-sm text-muted-foreground">AI systems analyze needs and distribute resources based on impact metrics.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center text-green-600">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Decentralized Efficiency</h4>
                  <p className="text-sm text-muted-foreground">Regional councils empowered to make swift, localized decisions with blockchain transparency.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <button className="px-6 py-3 bg-afrigov-charcoal text-white rounded-lg hover:bg-afrigov-charcoal/90 transition-colors shadow-lg">
            Rebuild. Don't Reform.
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyItWorks;
