
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, User, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full',
      isScrolled ? 'glass py-3 shadow-sm' : 'bg-transparent py-5'
    )}>
      <div className="container mx-auto px-6 md:px-8 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Home className="text-white w-5 h-5" />
          </span>
          <span className="font-semibold text-lg text-foreground">BlockEstate</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/properties">Properties</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm" className="rounded-full w-10 h-10 p-0">
            <Search className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm" className="rounded-full">
            <User className="h-4 w-4 mr-2" />
            <span>Sign In</span>
          </Button>
          <Button size="sm" className="rounded-full">
            Connect Wallet
          </Button>
        </div>

        <button 
          className="md:hidden rounded-full w-10 h-10 flex items-center justify-center focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-5 w-5 text-foreground" />
          ) : (
            <Menu className="h-5 w-5 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div 
        className={cn(
          "fixed inset-0 pt-20 pb-6 px-6 bg-background/95 backdrop-blur-md z-40 flex flex-col transition-transform duration-300 ease-in-out md:hidden",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col gap-4 mt-6">
          <MobileNavLink to="/" onClick={() => setIsMobileMenuOpen(false)}>
            <Home className="h-5 w-5 mr-2" />
            Home
          </MobileNavLink>
          <MobileNavLink to="/properties" onClick={() => setIsMobileMenuOpen(false)}>
            <Search className="h-5 w-5 mr-2" />
            Properties
          </MobileNavLink>
          <MobileNavLink to="/about" onClick={() => setIsMobileMenuOpen(false)}>
            About
          </MobileNavLink>
          <MobileNavLink to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
            Contact
          </MobileNavLink>
        </nav>
        <div className="mt-auto flex flex-col gap-3">
          <Button variant="outline" size="lg" className="w-full justify-start">
            <User className="h-5 w-5 mr-2" />
            Sign In
          </Button>
          <Button size="lg" className="w-full justify-start">
            Connect Wallet
          </Button>
        </div>
      </div>
    </header>
  );
};

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

const NavLink = ({ to, children }: NavLinkProps) => (
  <Link 
    to={to} 
    className="relative px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors duration-200 rounded-md"
  >
    {children}
  </Link>
);

interface MobileNavLinkProps extends NavLinkProps {
  onClick?: () => void;
}

const MobileNavLink = ({ to, children, onClick }: MobileNavLinkProps) => (
  <Link 
    to={to} 
    className="flex items-center px-4 py-3 text-lg font-medium text-foreground hover:bg-secondary rounded-lg transition-colors duration-200"
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Navbar;
