
import React from 'react';
import { Github, Twitter, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-afrigov-charcoal text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-afrigov-teal to-afrigov-earth-green flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full opacity-70"></div>
              </div>
              <div className="font-bold text-lg">AfriGov</div>
            </div>
            
            <p className="text-white/80 mb-4">
              "Power that cannot be earned should not be held."
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors flex items-center gap-1">
                  <span>About</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors flex items-center gap-1">
                  <span>System Blueprint</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors flex items-center gap-1">
                  <span>Developer API</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors flex items-center gap-1">
                  <span>Contact</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Governance Modules</h4>
            <ul className="space-y-2">
              <li>
                <a href="#councils" className="text-white/70 hover:text-white transition-colors">
                  Guardian Council
                </a>
              </li>
              <li>
                <a href="#councils" className="text-white/70 hover:text-white transition-colors">
                  Regional Councils
                </a>
              </li>
              <li>
                <a href="#ai-systems" className="text-white/70 hover:text-white transition-colors">
                  AI Systems
                </a>
              </li>
              <li>
                <a href="#hubs" className="text-white/70 hover:text-white transition-colors">
                  Innovation Hubs
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-6 border-t border-white/10 text-center md:text-left md:flex justify-between items-center text-sm text-white/60">
          <div>© 2025 AfriGov. A governance system for the future.</div>
          <div className="mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
