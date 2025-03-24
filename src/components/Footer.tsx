
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Mail, Phone, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-border">
      <div className="container mx-auto px-6 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <span className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Home className="text-white w-5 h-5" />
              </span>
              <span className="font-semibold text-lg">BlockEstate</span>
            </Link>
            <p className="text-muted-foreground mb-6">
              Revolutionizing real estate with blockchain technology for secure, transparent, and efficient property transactions.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#" aria-label="Facebook">
                <Facebook className="h-4 w-4" />
              </SocialLink>
              <SocialLink href="#" aria-label="Twitter">
                <Twitter className="h-4 w-4" />
              </SocialLink>
              <SocialLink href="#" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </SocialLink>
              <SocialLink href="#" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </SocialLink>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/properties">Properties</FooterLink>
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-3">
              <FooterLink to="/blockchain">Blockchain Verification</FooterLink>
              <FooterLink to="/wallet">Wallet Integration</FooterLink>
              <FooterLink to="/smart-contracts">Smart Contracts</FooterLink>
              <FooterLink to="/secure-payments">Secure Payments</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 text-muted-foreground flex-shrink-0" />
                <span className="text-muted-foreground">+1 (123) 456-7890</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 text-muted-foreground flex-shrink-0" />
                <span className="text-muted-foreground">info@blockestate.com</span>
              </li>
              <li className="flex items-start">
                <Home className="h-5 w-5 mr-3 text-muted-foreground flex-shrink-0" />
                <span className="text-muted-foreground">
                  123 Blockchain Boulevard<br />
                  San Francisco, CA 94107
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} BlockEstate. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <li>
    <Link to={to} className="text-muted-foreground hover:text-primary transition-colors">
      {children}
    </Link>
  </li>
);

const SocialLink = ({ href, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <a 
    href={href}
    className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
    target="_blank"
    rel="noopener noreferrer"
    {...props}
  >
    {children}
  </a>
);

export default Footer;
