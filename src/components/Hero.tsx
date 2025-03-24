
import React, { useState } from 'react';
import { Search, MapPin, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('All Properties');
  const [priceRange, setPriceRange] = useState('Any Price');
  const [isTypeOpen, setIsTypeOpen] = useState(false);
  const [isPriceOpen, setIsPriceOpen] = useState(false);

  const propertyTypes = ['All Properties', 'Houses', 'Apartments', 'Villas', 'Commercial'];
  const priceRanges = ['Any Price', '$100k - $300k', '$300k - $500k', '$500k - $1M', '$1M+'];

  return (
    <div className="relative min-h-[85vh] flex items-center justify-center px-6 md:px-8 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70 z-10"></div>
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-city-buildings-during-sunset-22886-large.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="container relative z-10 pt-16 animate-fade-up">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-block mb-3 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-xs font-medium">
            Blockchain-Powered Real Estate
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4 text-balance">
            Find Your Dream Property with <span className="text-primary">Blockchain</span> Security
          </h1>
          <p className="text-lg text-white/80 max-w-xl mx-auto mb-8">
            Discover properties with verified ownership records, transparent history, and secure transactions — all powered by blockchain technology.
          </p>
        </div>

        <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-lg p-2 md:p-4 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-2">
            <div className="relative flex-1 flex items-center bg-background rounded-lg px-4 py-2.5">
              <Search className="h-5 w-5 text-muted-foreground mr-2" />
              <input
                type="text"
                placeholder="Search by city, neighborhood, or address..."
                className="flex-1 bg-transparent border-none focus:outline-none text-foreground placeholder-muted-foreground"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="flex items-center px-2 text-muted-foreground">
                <MapPin className="h-4 w-4 mr-1" />
                <span className="text-sm">Nearby</span>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-2">
              {/* Property Type Dropdown */}
              <div className="relative">
                <button
                  className="flex items-center justify-between w-full md:w-auto px-4 py-2.5 bg-background rounded-lg text-foreground hover:bg-secondary transition-colors"
                  onClick={() => {
                    setIsTypeOpen(!isTypeOpen);
                    setIsPriceOpen(false);
                  }}
                >
                  <span>{selectedType}</span>
                  <ChevronDown className={cn(
                    "ml-2 h-4 w-4 transition-transform",
                    isTypeOpen ? "transform rotate-180" : ""
                  )} />
                </button>
                {isTypeOpen && (
                  <div className="absolute top-full left-0 mt-1 w-full bg-white rounded-lg shadow-lg overflow-hidden z-20 animate-scale-in">
                    {propertyTypes.map((type) => (
                      <button
                        key={type}
                        className={cn(
                          "w-full px-4 py-2.5 text-left hover:bg-secondary transition-colors",
                          selectedType === type ? "bg-secondary/50 font-medium" : ""
                        )}
                        onClick={() => {
                          setSelectedType(type);
                          setIsTypeOpen(false);
                        }}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Price Range Dropdown */}
              <div className="relative">
                <button
                  className="flex items-center justify-between w-full md:w-auto px-4 py-2.5 bg-background rounded-lg text-foreground hover:bg-secondary transition-colors"
                  onClick={() => {
                    setIsPriceOpen(!isPriceOpen);
                    setIsTypeOpen(false);
                  }}
                >
                  <span>{priceRange}</span>
                  <ChevronDown className={cn(
                    "ml-2 h-4 w-4 transition-transform",
                    isPriceOpen ? "transform rotate-180" : ""
                  )} />
                </button>
                {isPriceOpen && (
                  <div className="absolute top-full left-0 mt-1 w-full bg-white rounded-lg shadow-lg overflow-hidden z-20 animate-scale-in">
                    {priceRanges.map((range) => (
                      <button
                        key={range}
                        className={cn(
                          "w-full px-4 py-2.5 text-left hover:bg-secondary transition-colors",
                          priceRange === range ? "bg-secondary/50 font-medium" : ""
                        )}
                        onClick={() => {
                          setPriceRange(range);
                          setIsPriceOpen(false);
                        }}
                      >
                        {range}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <Button className="md:px-8 py-2.5">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <div className="flex items-center gap-8 text-white/80 text-sm">
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
              <span>10,000+ Properties</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
              <span>Verified Ownership</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
              <span>Smart Contracts</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
