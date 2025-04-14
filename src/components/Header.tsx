
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: 'Overview', href: '#overview' },
  { name: 'Councils', href: '#councils' },
  { name: 'AI Systems', href: '#ai-systems' },
  { name: 'Hubs', href: '#hubs' },
  { name: 'Vision', href: '#vision' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('Overview');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (item: string) => {
    setActiveNav(item);
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/60 dark:bg-black/60 border-b border-slate-200/50 dark:border-slate-800/50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-afrigov-teal to-afrigov-earth-green flex items-center justify-center">
            <div className="w-5 h-5 bg-white rounded-full opacity-70"></div>
          </div>
          <div className="font-bold text-xl md:text-2xl">AfriGov</div>
        </div>
        
        <nav className="hidden md:flex space-x-1 items-center">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`nav-link ${activeNav === item.name ? 'nav-link-active' : ''}`}
              onClick={() => handleNavClick(item.name)}
            >
              {item.name}
            </a>
          ))}
        </nav>
        
        <button
          className="md:hidden flex items-center"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-afrigov-charcoal shadow-lg py-4 animate-fade-in">
          <nav className="flex flex-col space-y-2 px-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`nav-link ${activeNav === item.name ? 'nav-link-active' : ''}`}
                onClick={() => handleNavClick(item.name)}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
