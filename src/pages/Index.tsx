
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import GuardianCouncil from '@/components/GuardianCouncil';
import RegionalCouncils from '@/components/RegionalCouncils';
import AIGovernance from '@/components/AIGovernance';
import InnovationHubs from '@/components/InnovationHubs';
import WhyItWorks from '@/components/WhyItWorks';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <GuardianCouncil />
        <RegionalCouncils />
        <AIGovernance />
        <InnovationHubs />
        <WhyItWorks />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
