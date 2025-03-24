
import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import PropertyCard, { PropertyType } from './PropertyCard';

const FeaturedProperties = () => {
  const [properties, setProperties] = useState<PropertyType[]>([]);
  
  // Mock data for initial render
  useEffect(() => {
    // In a real app, this would be fetched from an API
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
      }
    ]);
  }, []);

  return (
    <section className="py-20 px-6 md:px-8 bg-background">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <div className="flex items-center mb-2">
              <Sparkles className="text-primary h-5 w-5 mr-2" />
              <span className="text-sm font-medium text-primary">Featured Properties</span>
            </div>
            <h2 className="text-3xl font-bold text-foreground">Discover Our Featured Listings</h2>
          </div>
          <Button variant="ghost" asChild className="mt-4 md:mt-0">
            <Link to="/properties" className="flex items-center space-x-2">
              <span>View All Properties</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
