import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PropertyCard, { PropertyType } from '@/components/PropertyCard';
import { Button } from '@/components/ui/button';
import { Search, Filter, X, MapPin, Home, Building, BuildingSquare, ChevronDown, Bed, Bath, Square } from 'lucide-react';
import { cn } from '@/lib/utils';

type FilterState = {
  type: string;
  priceRange: string;
  bedrooms: string;
  bathrooms: string;
  minArea: string;
  maxArea: string;
  isVerified: boolean;
};

interface FilterDropdownProps {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
  icon?: React.ReactNode;
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({ label, value, options, onChange, icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <Button
        variant="outline"
        size="sm"
        className={cn(
          "rounded-full",
          value !== options[0] ? "bg-primary/10 border-primary text-primary" : ""
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        {icon}
        {label}: {value}
        <ChevronDown className={cn(
          "ml-1 h-4 w-4 transition-transform",
          isOpen ? "transform rotate-180" : ""
        )} />
      </Button>
      
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-40 bg-white rounded-lg shadow-lg overflow-hidden z-20 animate-scale-in">
          {options.map((option) => (
            <button
              key={option}
              className={cn(
                "w-full px-3 py-2 text-left hover:bg-secondary transition-colors text-sm",
                value === option ? "bg-secondary/50 font-medium" : ""
              )}
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const Properties: React.FC = () => {
  const [properties, setProperties] = useState<PropertyType[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    type: 'All',
    priceRange: 'Any',
    bedrooms: 'Any',
    bathrooms: 'Any',
    minArea: '',
    maxArea: '',
    isVerified: false
  });

  useEffect(() => {
    setProperties([
      {
        id: '1',
        title: 'Modern Apartment with Ocean View',
        address: '123 Seaside Ave, Miami, FL',
        price: 750000,
        bedrooms: 2,
        bathrooms: 2,
        area: 1200,
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
        isVerified: true
      },
      {
        id: '2',
        title: 'Luxury Villa with Private Pool',
        address: '456 Palm Dr, Beverly Hills, CA',
        price: 3500000,
        bedrooms: 5,
        bathrooms: 4,
        area: 4500,
        image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
        isVerified: true
      },
      {
        id: '3',
        title: 'Downtown Loft in Historic Building',
        address: '789 Main St, Seattle, WA',
        price: 550000,
        bedrooms: 1,
        bathrooms: 2,
        area: 950,
        image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
        isVerified: false
      },
      {
        id: '4',
        title: 'Family Home in Quiet Suburb',
        address: '321 Oak Ln, Austin, TX',
        price: 875000,
        bedrooms: 4,
        bathrooms: 3,
        area: 2800,
        image: 'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2665&q=80',
        isVerified: true
      },
      {
        id: '5',
        title: 'Penthouse with City Skyline Views',
        address: '555 Skyline Ave, Chicago, IL',
        price: 1200000,
        bedrooms: 3,
        bathrooms: 3.5,
        area: 2200,
        image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
        isVerified: true
      },
      {
        id: '6',
        title: 'Renovated Townhouse in Historic District',
        address: '742 Heritage Way, Boston, MA',
        price: 925000,
        bedrooms: 3,
        bathrooms: 2.5,
        area: 1850,
        image: 'https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
        isVerified: false
      },
      {
        id: '7',
        title: 'Waterfront Cottage with Private Dock',
        address: '123 Lakeside Dr, Lake Tahoe, NV',
        price: 1450000,
        bedrooms: 3,
        bathrooms: 2,
        area: 1600,
        image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2664&q=80',
        isVerified: true
      },
      {
        id: '8',
        title: 'Modern Eco-Friendly Home',
        address: '987 Green St, Portland, OR',
        price: 1150000,
        bedrooms: 4,
        bathrooms: 3,
        area: 2400,
        image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2674&q=80',
        isVerified: true
      }
    ]);
  }, []);

  const resetFilters = () => {
    setFilters({
      type: 'All',
      priceRange: 'Any',
      bedrooms: 'Any',
      bathrooms: 'Any',
      minArea: '',
      maxArea: '',
      isVerified: false
    });
  };

  const filterOptions = {
    types: ['All', 'House', 'Apartment', 'Villa', 'Condo', 'Townhouse'],
    priceRanges: ['Any', 'Under $500k', '$500k - $1M', '$1M - $5M', 'Over $5M'],
    bedrooms: ['Any', '1+', '2+', '3+', '4+', '5+'],
    bathrooms: ['Any', '1+', '1.5+', '2+', '3+', '4+']
  };

  const filterIcons = {
    House: Home,
    Apartment: Building,
    Villa: BuildingSquare,
    Condo: Building,
    Townhouse: Home
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-20 px-6 md:px-8 bg-background">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-3">Discover Properties</h1>
            <p className="text-muted-foreground text-center">
              Explore our curated selection of blockchain-verified properties from around the world.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-4 mb-8">
            <div className="relative flex-1 flex items-center bg-white border border-border rounded-lg px-4 py-2.5 shadow-sm">
              <Search className="h-5 w-5 text-muted-foreground mr-2" />
              <input
                type="text"
                placeholder="Search by location, property name, or address..."
                className="flex-1 bg-transparent border-none focus:outline-none text-foreground placeholder-muted-foreground"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            <Button
              variant="outline"
              className="lg:hidden"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>

            <div className="hidden lg:flex items-center gap-2">
              <FilterDropdown
                label="Type"
                value={filters.type}
                options={filterOptions.types}
                onChange={(value) => setFilters({ ...filters, type: value })}
                icon={<Home className="h-4 w-4 mr-2" />}
              />
              <FilterDropdown
                label="Price"
                value={filters.priceRange}
                options={filterOptions.priceRanges}
                onChange={(value) => setFilters({ ...filters, priceRange: value })}
                icon={<div className="text-sm font-medium mr-2">$</div>}
              />
              <FilterDropdown
                label="Beds"
                value={filters.bedrooms}
                options={filterOptions.bedrooms}
                onChange={(value) => setFilters({ ...filters, bedrooms: value })}
                icon={<Bed className="h-4 w-4 mr-2" />}
              />
              <FilterDropdown
                label="Baths"
                value={filters.bathrooms}
                options={filterOptions.bathrooms}
                onChange={(value) => setFilters({ ...filters, bathrooms: value })}
                icon={<Bath className="h-4 w-4 mr-2" />}
              />

              <div className="h-8 border-l border-border mx-1"></div>

              <Button 
                variant="outline" 
                size="sm" 
                className={cn(
                  "rounded-full px-3 text-sm",
                  filters.isVerified ? "bg-primary/10 border-primary text-primary" : ""
                )}
                onClick={() => setFilters({ ...filters, isVerified: !filters.isVerified })}
              >
                <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                Blockchain Verified
              </Button>

              <Button 
                variant="ghost" 
                size="sm" 
                className="rounded-full px-3 text-sm"
                onClick={resetFilters}
              >
                <X className="h-3 w-3 mr-2" />
                Reset Filters
              </Button>
            </div>
          </div>

          {isFilterOpen && (
            <div className="lg:hidden bg-white border border-border rounded-lg p-5 mb-6 animate-fade-in">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">Filters</h3>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={() => setIsFilterOpen(false)}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Property Type</label>
                  <div className="grid grid-cols-3 gap-2">
                    {filterOptions.types.map((type) => (
                      <Button
                        key={type}
                        variant="outline"
                        size="sm"
                        className={cn(
                          "justify-start",
                          filters.type === type ? "bg-primary/10 border-primary text-primary" : ""
                        )}
                        onClick={() => setFilters({ ...filters, type: type })}
                      >
                        {type !== 'All' && filterIcons[type as keyof typeof filterIcons] ? (
                          React.createElement(filterIcons[type as keyof typeof filterIcons], { className: "h-3.5 w-3.5 mr-1.5" })
                        ) : null}
                        {type}
                      </Button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Price Range</label>
                  <div className="grid grid-cols-2 gap-2">
                    {filterOptions.priceRanges.map((range) => (
                      <Button
                        key={range}
                        variant="outline"
                        size="sm"
                        className={cn(
                          filters.priceRange === range ? "bg-primary/10 border-primary text-primary" : ""
                        )}
                        onClick={() => setFilters({ ...filters, priceRange: range })}
                      >
                        {range}
                      </Button>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="text-sm font-medium mb-1.5 block">Bedrooms</label>
                    <select 
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none"
                      value={filters.bedrooms}
                      onChange={(e) => setFilters({ ...filters, bedrooms: e.target.value })}
                    >
                      {filterOptions.bedrooms.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                  <div className="flex-1">
                    <label className="text-sm font-medium mb-1.5 block">Bathrooms</label>
                    <select 
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none"
                      value={filters.bathrooms}
                      onChange={(e) => setFilters({ ...filters, bathrooms: e.target.value })}
                    >
                      {filterOptions.bathrooms.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Square Footage</label>
                  <div className="flex gap-2 items-center">
                    <input
                      type="number"
                      placeholder="Min"
                      className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none"
                      value={filters.minArea}
                      onChange={(e) => setFilters({ ...filters, minArea: e.target.value })}
                    />
                    <span className="text-muted-foreground">to</span>
                    <input
                      type="number"
                      placeholder="Max"
                      className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none"
                      value={filters.maxArea}
                      onChange={(e) => setFilters({ ...filters, maxArea: e.target.value })}
                    />
                  </div>
                </div>
                
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="isVerified"
                    className="rounded border-gray-300 text-primary focus:ring-primary h-4 w-4"
                    checked={filters.isVerified}
                    onChange={(e) => setFilters({ ...filters, isVerified: e.target.checked })}
                  />
                  <label htmlFor="isVerified" className="ml-2 text-sm font-medium">
                    Blockchain Verified Only
                  </label>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button className="flex-1" onClick={() => setIsFilterOpen(false)}>
                    Apply Filters
                  </Button>
                  <Button variant="outline" className="flex-1" onClick={resetFilters}>
                    Reset
                  </Button>
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-between items-center mb-6">
            <p className="text-muted-foreground">
              <span className="font-medium text-foreground">{properties.length}</span> properties found
            </p>
            <div className="flex items-center">
              <span className="text-sm text-muted-foreground mr-2">Sort by:</span>
              <select className="bg-white border border-input rounded-md text-sm px-3 py-1.5 focus:outline-none">
                <option>Newest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Most Popular</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="outline" size="sm" className="w-10 h-10 p-0 bg-primary text-white">
                1
              </Button>
              <Button variant="outline" size="sm" className="w-10 h-10 p-0">
                2
              </Button>
              <Button variant="outline" size="sm" className="w-10 h-10 p-0">
                3
              </Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Properties;
