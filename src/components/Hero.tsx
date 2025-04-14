
import React from 'react';
import { ArrowDownCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="py-16 md:py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-afrigov-teal/5 to-afrigov-earth-green/5"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            A Governance System for the 
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-afrigov-teal to-afrigov-earth-green"> Future of Africa</span>
          </h1>
          
          <div className="overflow-hidden h-16 md:h-20">
            <div className="animate-float">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 tracking-tight animate-pulse-slow">
                Decentralized. Data-Driven. Designed for the People.
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground mx-auto max-w-3xl">
                Power earned by merit. Governance powered by intelligence.
              </p>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-12">
          <a 
            href="#overview" 
            className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground 
                     rounded-full hover:bg-primary/90 transition-colors shadow-md hover:shadow-lg"
          >
            Explore the Model
            <ArrowDownCircle size={20} />
          </a>
        </div>
        
        <div className="mt-16 lg:mt-24 flex justify-center">
          <div className="w-full max-w-5xl h-2 bg-gradient-to-r from-afrigov-earth-terracotta via-afrigov-teal to-afrigov-earth-green rounded-full opacity-50"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
