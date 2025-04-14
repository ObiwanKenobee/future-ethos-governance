
import React, { useState } from 'react';
import { Database, Briefcase, TrendingUp, BarChart, PieChart, LineChart } from 'lucide-react';

const tabs = [
  { id: 'budget', name: 'Budget AI', icon: <Briefcase className="w-5 h-5" /> },
  { id: 'resources', name: 'Resource AI', icon: <Database className="w-5 h-5" /> },
  { id: 'predictive', name: 'Predictive Governance', icon: <TrendingUp className="w-5 h-5" /> },
];

const AIGovernance = () => {
  const [activeTab, setActiveTab] = useState('budget');

  return (
    <section id="ai-systems" className="py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="section-title">AI-Powered Governance</h2>
          <p className="section-subtitle">
            Data-driven decision making free from personal influence.
            Our transparent AI systems optimize resource allocation in real-time.
          </p>
        </div>
        
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`flex items-center gap-2 px-5 py-3 rounded-full border transition-all ${
                activeTab === tab.id
                  ? 'bg-primary text-white border-primary shadow-md'
                  : 'bg-white dark:bg-afrigov-charcoal/30 border-slate-200 dark:border-slate-700 hover:border-primary/50'
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.icon}
              <span>{tab.name}</span>
            </button>
          ))}
        </div>
        
        {/* Visualization Area */}
        <div className="glass-panel p-6 md:p-8 rounded-xl">
          <div className="mb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <h3 className="text-xl font-semibold">
              {activeTab === 'budget' && 'Budget Allocation AI'}
              {activeTab === 'resources' && 'Resource Distribution AI'}
              {activeTab === 'predictive' && 'Predictive Policy Analysis'}
            </h3>
            
            <div className="flex items-center gap-4">
              <div className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-green-500"></span>
                <span>Trust Score: 98%</span>
              </div>
              <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                <span>Blockchain Verified</span>
              </div>
            </div>
          </div>
          
          {/* Simulation Interface */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-6">
              <h4 className="font-medium text-sm text-slate-500 dark:text-slate-400">Data Sources</h4>
              
              <div className="space-y-4">
                {activeTab === 'budget' && (
                  <>
                    <div className="flex justify-between items-center p-3 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
                      <span>National Treasury</span>
                      <span className="text-green-500">Connected</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
                      <span>Regional Accounts</span>
                      <span className="text-green-500">Connected</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
                      <span>Blockchain Ledger</span>
                      <span className="text-green-500">Connected</span>
                    </div>
                  </>
                )}
                
                {activeTab === 'resources' && (
                  <>
                    <div className="flex justify-between items-center p-3 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
                      <span>Supply Chain Data</span>
                      <span className="text-green-500">Connected</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
                      <span>Regional Inventories</span>
                      <span className="text-green-500">Connected</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
                      <span>Logistics Network</span>
                      <span className="text-green-500">Connected</span>
                    </div>
                  </>
                )}
                
                {activeTab === 'predictive' && (
                  <>
                    <div className="flex justify-between items-center p-3 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
                      <span>Historical Policy Data</span>
                      <span className="text-green-500">Connected</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
                      <span>Social Impact Metrics</span>
                      <span className="text-green-500">Connected</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
                      <span>Economic Indicators</span>
                      <span className="text-green-500">Connected</span>
                    </div>
                  </>
                )}
              </div>
            </div>
            
            <div className="col-span-2 bg-white dark:bg-slate-800/50 p-4 rounded-lg flex flex-col">
              <div className="flex justify-between mb-4">
                <h4 className="font-medium">
                  {activeTab === 'budget' && 'Budget Optimization'}
                  {activeTab === 'resources' && 'Resource Allocation'}
                  {activeTab === 'predictive' && 'Policy Impact Forecast'}
                </h4>
                <div className="flex gap-2">
                  <button className="p-1 hover:bg-slate-100 dark:hover:bg-slate-700 rounded">
                    <BarChart className="w-5 h-5" />
                  </button>
                  <button className="p-1 hover:bg-slate-100 dark:hover:bg-slate-700 rounded">
                    <PieChart className="w-5 h-5" />
                  </button>
                  <button className="p-1 hover:bg-slate-100 dark:hover:bg-slate-700 rounded">
                    <LineChart className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              <div className="flex-1 flex items-center justify-center">
                <div className="w-full aspect-[16/9] bg-slate-100 dark:bg-slate-700/30 rounded-md flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                      {activeTab === 'budget' && <Briefcase className="w-8 h-8 text-primary" />}
                      {activeTab === 'resources' && <Database className="w-8 h-8 text-primary" />}
                      {activeTab === 'predictive' && <TrendingUp className="w-8 h-8 text-primary" />}
                    </div>
                    <p className="text-muted-foreground">Interactive visualization</p>
                    <p className="text-xs text-muted-foreground/70">Data processing in real-time</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-sm">System operational and processing data in real-time</span>
              </div>
              <button className="px-4 py-2 bg-primary/10 text-primary rounded hover:bg-primary/20 transition-colors text-sm">
                View Full Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIGovernance;
