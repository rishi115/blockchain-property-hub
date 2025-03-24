
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Bed, Bath, Square, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface PropertyType {
  id: string;
  title: string;
  address: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  image: string;
  isVerified: boolean;
}

interface PropertyCardProps {
  property: PropertyType;
  className?: string;
}

const PropertyCard = ({ property, className }: PropertyCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  return (
    <Link 
      to={`/property/${property.id}`}
      className={cn(
        'group flex flex-col rounded-xl overflow-hidden bg-white border border-border/50 transition-all duration-300',
        isHovered ? 'shadow-lg translate-y-[-4px]' : 'shadow-sm',
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={property.image} 
          alt={property.title}
          className={cn(
            "object-cover w-full h-full transition-transform duration-700 blur-up",
            isHovered ? 'scale-110' : 'scale-100',
            imageLoaded ? 'lazyloaded' : ''
          )}
          onLoad={() => setImageLoaded(true)}
        />
        <button 
          className={cn(
            'absolute top-3 right-3 w-9 h-9 rounded-full backdrop-blur-sm flex items-center justify-center transition-colors',
            isFavorite ? 'bg-white/70 text-red-500' : 'bg-black/20 text-white hover:bg-white/50 hover:text-gray-700'
          )}
          onClick={handleFavoriteClick}
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          <Heart className={cn('w-5 h-5', isFavorite ? 'fill-current' : '')} />
        </button>
        
        {property.isVerified && (
          <div className="absolute bottom-3 left-3">
            <div className="bg-primary/90 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-md flex items-center">
              <span className="mr-1">●</span> Blockchain Verified
            </div>
          </div>
        )}
      </div>
      
      <div className="flex-1 p-4 flex flex-col">
        <div className="flex items-start justify-between">
          <h3 className="font-semibold text-lg line-clamp-1 group-hover:text-primary transition-colors">
            {property.title}
          </h3>
          <span className="font-bold text-primary">
            {formatPrice(property.price)}
          </span>
        </div>
        
        <div className="flex items-center mt-1 text-muted-foreground">
          <MapPin className="w-3.5 h-3.5 mr-1 flex-shrink-0" />
          <span className="text-sm line-clamp-1">{property.address}</span>
        </div>
        
        <div className="mt-4 pt-3 border-t border-border/50 grid grid-cols-3 gap-2">
          <div className="flex items-center">
            <Bed className="w-4 h-4 mr-1.5 text-muted-foreground" />
            <span className="text-sm font-medium">{property.bedrooms} Beds</span>
          </div>
          <div className="flex items-center">
            <Bath className="w-4 h-4 mr-1.5 text-muted-foreground" />
            <span className="text-sm font-medium">{property.bathrooms} Baths</span>
          </div>
          <div className="flex items-center">
            <Square className="w-4 h-4 mr-1.5 text-muted-foreground" />
            <span className="text-sm font-medium">{property.area} sqft</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
