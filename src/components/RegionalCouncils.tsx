
import React, { useState } from 'react';
import { Map, Users, Check, BarChart } from 'lucide-react';

interface Region {
  id: string;
  name: string;
  councilMembers: number;
  policies: number;
  voterTurnout: number;
  blockchainVerified: boolean;
}

const regions: Region[] = [
  { id: 'north', name: 'Northern Region', councilMembers: 12, policies: 34, voterTurnout: 78, blockchainVerified: true },
  { id: 'west', name: 'Western Region', councilMembers: 15, policies: 41, voterTurnout: 82, blockchainVerified: true },
  { id: 'central', name: 'Central Region', councilMembers: 11, policies: 29, voterTurnout: 75, blockchainVerified: true },
  { id: 'east', name: 'Eastern Region', councilMembers: 14, policies: 37, voterTurnout: 81, blockchainVerified: true },
  { id: 'south', name: 'Southern Region', councilMembers: 13, policies: 36, voterTurnout: 79, blockchainVerified: true },
];

const RegionalCouncils = () => {
  const [selectedRegion, setSelectedRegion] = useState<Region | null>(null);

  return (
    <section id="councils" className="py-16 md:py-24 px-4 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="section-title">Regional Councils</h2>
          <p className="section-subtitle">
            Decentralized decision-making puts governance in the hands of local leaders,
            ensuring policies serve the unique needs of each community.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto mb-12">
          <div className="aspect-[16/9] rounded-xl overflow-hidden glass-panel">
            <div className="absolute inset-0 flex items-center justify-center">
              <Map className="w-12 h-12 text-muted-foreground/30" />
            </div>
            <svg viewBox="0 0 1200 800" className="w-full h-full">
              {/* Simplified Africa map outline */}
              <path 
                d="M400,150 C450,120 500,100 550,150 C600,200 650,180 700,220 C750,260 800,300 850,320 C900,340 920,400 900,450 C880,500 850,550 820,600 C790,650 750,680 700,690 C650,700 600,720 550,700 C500,680 450,650 400,600 C350,550 300,500 320,450 C340,400 360,350 380,300 C400,250 350,180 400,150 Z" 
                fill="url(#map-gradient)" 
                stroke="#94A3B8" 
                strokeWidth="2"
                className="opacity-70"
              />
              
              {/* Region hotspots */}
              <circle cx="450" cy="280" r="30" fill="rgba(14, 165, 233, 0.3)" stroke="#0EA5E9" strokeWidth="2" 
                      className="cursor-pointer hover:fill-afrigov-teal/50 transition-colors"
                      onClick={() => setSelectedRegion(regions[0])} />
                      
              <circle cx="380" cy="450" r="30" fill="rgba(14, 165, 233, 0.3)" stroke="#0EA5E9" strokeWidth="2" 
                      className="cursor-pointer hover:fill-afrigov-teal/50 transition-colors"
                      onClick={() => setSelectedRegion(regions[1])} />
                      
              <circle cx="600" cy="380" r="30" fill="rgba(14, 165, 233, 0.3)" stroke="#0EA5E9" strokeWidth="2" 
                      className="cursor-pointer hover:fill-afrigov-teal/50 transition-colors"
                      onClick={() => setSelectedRegion(regions[2])} />
                      
              <circle cx="700" cy="300" r="30" fill="rgba(14, 165, 233, 0.3)" stroke="#0EA5E9" strokeWidth="2" 
                      className="cursor-pointer hover:fill-afrigov-teal/50 transition-colors"
                      onClick={() => setSelectedRegion(regions[3])} />
                      
              <circle cx="550" cy="550" r="30" fill="rgba(14, 165, 233, 0.3)" stroke="#0EA5E9" strokeWidth="2" 
                      className="cursor-pointer hover:fill-afrigov-teal/50 transition-colors"
                      onClick={() => setSelectedRegion(regions[4])} />
              
              {/* Gradient definition */}
              <defs>
                <linearGradient id="map-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.05" />
                  <stop offset="50%" stopColor="#CD5C5C" stopOpacity="0.05" />
                  <stop offset="100%" stopColor="#2E8B57" stopOpacity="0.05" />
                </linearGradient>
              </defs>
            </svg>
            
            <div className="absolute bottom-6 left-6 glass-panel px-4 py-3 text-sm">
              <p>Click on a region to view details</p>
            </div>
          </div>
        </div>
        
        {/* Regional Council Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 animate-fade-in-slow">
          {regions.map((region) => (
            <div 
              key={region.id}
              className={`glass-card p-6 transition-all duration-300 ${
                selectedRegion?.id === region.id 
                  ? 'ring-2 ring-primary shadow-lg transform scale-105' 
                  : 'hover:shadow-md'
              }`}
              onClick={() => setSelectedRegion(region)}
            >
              <h3 className="font-semibold text-lg mb-4">{region.name}</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-primary" />
                    <span className="text-sm">Council Members</span>
                  </div>
                  <span className="font-medium">{region.councilMembers}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span className="text-sm">Active Policies</span>
                  </div>
                  <span className="font-medium">{region.policies}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <BarChart className="w-4 h-4 text-primary" />
                    <span className="text-sm">Voter Turnout</span>
                  </div>
                  <span className="font-medium">{region.voterTurnout}%</span>
                </div>
                
                <div className="pt-3 border-t border-slate-200/30 flex items-center gap-2 justify-end">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span className="text-xs text-muted-foreground">Blockchain Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RegionalCouncils;
