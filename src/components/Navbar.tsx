
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BookOpen, BarChart2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useProgress } from '@/contexts/ProgressContext';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { overallAccuracy } = useProgress();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/topics', label: 'All Topics' },
    { path: '/results', label: 'My Progress' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass-effect px-4 py-3 backdrop-blur-md bg-white/80 dark:bg-black/30 border-b border-slate-200/50 dark:border-slate-800/50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link 
          to="/" 
          className="flex items-center space-x-2 transition-transform duration-300 hover:scale-105"
        >
          <BookOpen className="h-5 w-5 text-green-600" strokeWidth={2.5} />
          <span className="text-xl font-semibold bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
            GreenLink
          </span>
        </Link>

        {/* Progress indicator (visible on medium and larger screens) */}
        <div className="hidden md:flex items-center space-x-2 mr-2">
          <div className="bg-white dark:bg-gray-800 rounded-full px-3 py-1 flex items-center space-x-2 shadow-sm">
            <BarChart2 className="h-4 w-4 text-green-600" />
            <span className="text-sm font-medium">
              Accuracy: {overallAccuracy.toFixed(0)}%
            </span>
          </div>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "px-3 py-2 rounded-md text-sm font-medium transition-all duration-200",
                location.pathname === item.path
                  ? "text-green-600 bg-green-50 dark:bg-green-900/20 dark:text-green-400"
                  : "text-gray-600 hover:text-green-600 hover:bg-green-50 dark:text-gray-300 dark:hover:text-green-400 dark:hover:bg-green-900/10"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={toggleMenu}
            className="text-gray-600 dark:text-gray-200"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden pt-2 pb-4 px-2 space-y-1 sm:px-3 animate-fade-in">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "block px-3 py-2 rounded-md text-base font-medium",
                location.pathname === item.path
                  ? "text-green-600 bg-green-50 dark:bg-green-900/20 dark:text-green-400"
                  : "text-gray-600 hover:text-green-600 hover:bg-green-50 dark:text-gray-300 dark:hover:text-green-400 dark:hover:bg-green-900/10"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          
          {/* Mobile progress indicator */}
          <div className="mt-4 bg-white dark:bg-gray-800 rounded-lg px-3 py-2 flex items-center space-x-2 shadow-sm">
            <BarChart2 className="h-4 w-4 text-green-600" />
            <span className="text-sm font-medium">
              Accuracy: {overallAccuracy.toFixed(0)}%
            </span>
          </div>
        </div>
      )}
    </nav>
  );
}
