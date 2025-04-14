
import React, { useState } from 'react';
import { 
  Leaf, Cpu, Zap, GraduationCap, Building2, HeartPulse, 
  DollarSign, Globe, Filter
} from 'lucide-react';

interface Sector {
  id: string;
  name: string;
  icon: React.ReactNode;
  experts: number;
  projects: number;
  impact: number;
  region: string;
}

const sectors: Sector[] = [
  { 
    id: 'agriculture', 
    name: 'Agriculture', 
    icon: <Leaf className="w-6 h-6" />, 
    experts: 24, 
    projects: 48, 
    impact: 87,
    region: 'West'
  },
  { 
    id: 'technology', 
    name: 'Technology', 
    icon: <Cpu className="w-6 h-6" />, 
    experts: 36, 
    projects: 72, 
    impact: 92,
    region: 'East'
  },
  { 
    id: 'energy', 
    name: 'Energy', 
    icon: <Zap className="w-6 h-6" />, 
    experts: 18, 
    projects: 31, 
    impact: 84,
    region: 'North'
  },
  { 
    id: 'education', 
    name: 'Education', 
    icon: <GraduationCap className="w-6 h-6" />, 
    experts: 42, 
    projects: 56, 
    impact: 90,
    region: 'Central'
  },
  { 
    id: 'infrastructure', 
    name: 'Infrastructure', 
    icon: <Building2 className="w-6 h-6" />, 
    experts: 30, 
    projects: 43, 
    impact: 81,
    region: 'South'
  },
  { 
    id: 'healthcare', 
    name: 'Healthcare', 
    icon: <HeartPulse className="w-6 h-6" />, 
    experts: 38, 
    projects: 61, 
    impact: 89,
    region: 'East'
  },
  { 
    id: 'finance', 
    name: 'Finance', 
    icon: <DollarSign className="w-6 h-6" />, 
    experts: 22, 
    projects: 37, 
    impact: 78,
    region: 'West'
  },
  { 
    id: 'environment', 
    name: 'Environment', 
    icon: <Globe className="w-6 h-6" />, 
    experts: 26, 
    projects: 42, 
    impact: 86,
    region: 'South'
  },
];

const InnovationHubs = () => {
  const [filter, setFilter] = useState('all');
  const [selectedSector, setSelectedSector] = useState<Sector | null>(null);
  
  const filteredSectors = filter === 'all' 
    ? sectors 
    : sectors.filter(s => {
        if (filter === 'high-impact') return s.impact > 85;
        if (filter === 'east') return s.region === 'East';
        if (filter === 'west') return s.region === 'West';
        return true;
      });

  return (
    <section id="hubs" className="py-16 md:py-24 px-4 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="section-title">Innovation Leadership Hubs</h2>
          <p className="section-subtitle">
            Where policy meets progress. Each sector is led by experts who balance
            innovation with ethical governance and community needs.
          </p>
        </div>
        
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <button 
            onClick={() => setFilter('all')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg border text-sm transition-colors ${
              filter === 'all' 
                ? 'bg-primary text-white border-primary' 
                : 'bg-white dark:bg-transparent border-slate-200 dark:border-slate-700 hover:border-primary/50'
            }`}
          >
            <Filter className="w-4 h-4" />
            <span>All Sectors</span>
          </button>
          
          <button 
            onClick={() => setFilter('high-impact')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg border text-sm transition-colors ${
              filter === 'high-impact' 
                ? 'bg-primary text-white border-primary' 
                : 'bg-white dark:bg-transparent border-slate-200 dark:border-slate-700 hover:border-primary/50'
            }`}
          >
            <Filter className="w-4 h-4" />
            <span>High Impact</span>
          </button>
          
          <button 
            onClick={() => setFilter('east')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg border text-sm transition-colors ${
              filter === 'east' 
                ? 'bg-primary text-white border-primary' 
                : 'bg-white dark:bg-transparent border-slate-200 dark:border-slate-700 hover:border-primary/50'
            }`}
          >
            <Filter className="w-4 h-4" />
            <span>Eastern Region</span>
          </button>
          
          <button 
            onClick={() => setFilter('west')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg border text-sm transition-colors ${
              filter === 'west' 
                ? 'bg-primary text-white border-primary' 
                : 'bg-white dark:bg-transparent border-slate-200 dark:border-slate-700 hover:border-primary/50'
            }`}
          >
            <Filter className="w-4 h-4" />
            <span>Western Region</span>
          </button>
        </div>
        
        {/* Sectors Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {filteredSectors.map((sector) => (
            <div 
              key={sector.id}
              className={`glass-card p-5 cursor-pointer transition-all duration-300 ${
                selectedSector?.id === sector.id 
                  ? 'ring-2 ring-primary shadow-lg' 
                  : 'hover:shadow-md'
              }`}
              onClick={() => setSelectedSector(sector)}
            >
              <div className="flex flex-col h-full">
                <div className="mb-4 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  {sector.icon}
                </div>
                
                <h3 className="font-semibold mb-3">{sector.name}</h3>
                
                <div className="mt-auto grid grid-cols-3 gap-2 text-center text-sm">
                  <div>
                    <div className="font-semibold">{sector.experts}</div>
                    <div className="text-xs text-muted-foreground">Experts</div>
                  </div>
                  
                  <div>
                    <div className="font-semibold">{sector.projects}</div>
                    <div className="text-xs text-muted-foreground">Projects</div>
                  </div>
                  
                  <div>
                    <div className="font-semibold">{sector.impact}%</div>
                    <div className="text-xs text-muted-foreground">Impact</div>
                  </div>
                </div>
                
                <div className="mt-3 pt-2 border-t border-slate-200/30 flex justify-between items-center text-xs">
                  <span className="text-muted-foreground">{sector.region} Region</span>
                  <div className="flex items-center gap-1 text-green-500">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                    <span>Active</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Selected Sector Details */}
        {selectedSector && (
          <div className="glass-panel p-6 rounded-xl mt-8 animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                {selectedSector.icon}
              </div>
              <h3 className="text-xl font-semibold">{selectedSector.name} Leadership Hub</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-medium mb-4 text-sm text-slate-500 dark:text-slate-400">Lead Experts</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-white dark:bg-slate-800/50 rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-primary/20"></div>
                    <div>
                      <div className="font-medium text-sm">Dr. {selectedSector.name === 'Technology' ? 'Oluwaseun Adeyemi' : 'Fatima N\'Diaye'}</div>
                      <div className="text-xs text-muted-foreground">Hub Director</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white dark:bg-slate-800/50 rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-primary/20"></div>
                    <div>
                      <div className="font-medium text-sm">Prof. {selectedSector.name === 'Agriculture' ? 'Ibrahim Keita' : 'Amara Okafor'}</div>
                      <div className="text-xs text-muted-foreground">Research Lead</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white dark:bg-slate-800/50 rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-primary/20"></div>
                    <div>
                      <div className="font-medium text-sm">{selectedSector.name === 'Education' ? 'Ms. Grace Mwangi' : 'Mr. Ahmed Toure'}</div>
                      <div className="text-xs text-muted-foreground">Policy Integration</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-4 text-sm text-slate-500 dark:text-slate-400">Active Projects</h4>
                <div className="space-y-3">
                  <div className="p-3 bg-white dark:bg-slate-800/50 rounded-lg">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-sm">
                        {selectedSector.name === 'Technology' ? 'AI Ethics Framework' : 
                         selectedSector.name === 'Agriculture' ? 'Sustainable Farming Initiative' :
                         selectedSector.name === 'Education' ? 'Digital Learning Platform' :
                         'Community Development Project'}
                      </span>
                      <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 px-2 py-0.5 rounded">Active</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-primary h-full rounded-full" style={{ width: '68%' }}></div>
                    </div>
                  </div>
                  
                  <div className="p-3 bg-white dark:bg-slate-800/50 rounded-lg">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-sm">
                        {selectedSector.name === 'Energy' ? 'Renewable Energy Grid' : 
                         selectedSector.name === 'Healthcare' ? 'Mobile Health Clinics' :
                         selectedSector.name === 'Finance' ? 'Blockchain Banking' :
                         'Regional Innovation Center'}
                      </span>
                      <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 px-2 py-0.5 rounded">Active</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-primary h-full rounded-full" style={{ width: '42%' }}></div>
                    </div>
                  </div>
                  
                  <div className="p-3 bg-white dark:bg-slate-800/50 rounded-lg">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-sm">Policy Implementation Framework</span>
                      <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 px-2 py-0.5 rounded">Planning</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-blue-400 h-full rounded-full" style={{ width: '15%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-4 text-sm text-slate-500 dark:text-slate-400">Key Metrics</h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Community Impact</span>
                      <span className="font-medium text-sm">{selectedSector.impact}%</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                      <div className="bg-primary h-full rounded-full" style={{ width: `${selectedSector.impact}%` }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Resource Efficiency</span>
                      <span className="font-medium text-sm">{70 + Math.floor(Math.random() * 20)}%</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                      <div className="bg-afrigov-earth-green h-full rounded-full" style={{ width: `${75 + Math.floor(Math.random() * 15)}%` }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Innovation Index</span>
                      <span className="font-medium text-sm">{65 + Math.floor(Math.random() * 25)}%</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                      <div className="bg-afrigov-earth-terracotta h-full rounded-full" style={{ width: `${70 + Math.floor(Math.random() * 20)}%` }}></div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-slate-200/30 dark:border-slate-700/30">
                  <button className="w-full py-2 bg-primary/10 text-primary rounded hover:bg-primary/20 transition-colors text-sm">
                    View Detailed Dashboard
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default InnovationHubs;
