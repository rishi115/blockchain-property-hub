
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { PropertyType } from '@/components/PropertyCard';
import { Button } from '@/components/ui/button';
import { 
  MapPin, Bed, Bath, Square, Heart, Share2, ArrowLeft, 
  Calendar, CheckCircle, Home, User, ShieldCheck, Building, 
  Clock, Wallet
} from 'lucide-react';
import { cn } from '@/lib/utils';

const PropertyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = useState<PropertyType | null>(null);
  const [activeImage, setActiveImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isImageViewerOpen, setIsImageViewerOpen] = useState(false);
  
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
    
    // In a real app, this would fetch property details from an API
    // For now, we'll simulate fetching with mock data
    setTimeout(() => {
      setProperty({
        id: id || '1',
        title: 'Luxurious Beachfront Villa with Private Pool',
        address: '123 Oceanfront Drive, Malibu, CA 90265',
        price: 4750000,
        bedrooms: 5,
        bathrooms: 6,
        area: 6500,
        image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
        isVerified: true
      });
    }, 500);
  }, [id]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  // Mock data for additional property images
  const propertyImages = [
    'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
    'https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
    'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
    'https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80'
  ];

  // Mock property features
  const propertyFeatures = [
    'Private Pool', 'Ocean View', 'Smart Home', 'Home Theater',
    'Wine Cellar', 'Gym', 'Spa', 'Outdoor Kitchen',
    'Gated Community', 'EV Charging', 'Solar Panels', 'Home Office'
  ];

  // Mock transaction history
  const transactionHistory = [
    { date: 'Mar 15, 2023', event: 'Listed on BlockEstate', price: '$4,750,000' },
    { date: 'Feb 10, 2023', event: 'Property Renovated', price: '-' },
    { date: 'Sep 21, 2018', event: 'Sold', price: '$3,900,000' },
    { date: 'Jul 05, 2018', event: 'Listed for Sale', price: '$4,100,000' },
    { date: 'Jun 12, 2005', event: 'Sold', price: '$2,450,000' },
  ];

  if (!property) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="animate-pulse flex flex-col items-center">
            <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mb-4">
              <Home className="w-10 h-10 text-muted-foreground" />
            </div>
            <div className="h-8 bg-secondary rounded w-64 mb-4"></div>
            <div className="h-4 bg-secondary rounded w-40"></div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20 pb-20 bg-background">
        <div className="container mx-auto px-4 md:px-8 animate-fade-in">
          {/* Back button */}
          <div className="mb-6">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/properties" className="flex items-center text-muted-foreground hover:text-foreground">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Properties
              </Link>
            </Button>
          </div>
          
          {/* Property header */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-3">{property.title}</h1>
              <div className="flex items-center text-muted-foreground">
                <MapPin className="h-4 w-4 mr-2" />
                <span>{property.address}</span>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <div className="text-3xl font-bold text-primary mb-1">
                {formatPrice(property.price)}
              </div>
              <div className="flex items-center">
                {property.isVerified && (
                  <div className="flex items-center text-sm bg-primary/10 text-primary px-2 py-1 rounded-full mr-2">
                    <ShieldCheck className="h-3.5 w-3.5 mr-1" />
                    <span>Blockchain Verified</span>
                  </div>
                )}
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={handleFavoriteClick}>
                  <Heart className={cn("h-5 w-5", isFavorite ? "fill-red-500 text-red-500" : "")} />
                </Button>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
          
          {/* Property images */}
          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-[600px]">
              <div className="md:col-span-2 md:row-span-2 rounded-xl overflow-hidden relative group">
                <img 
                  src={propertyImages[0]} 
                  alt={property.title} 
                  className="w-full h-full object-cover"
                  onClick={() => {
                    setActiveImage(0);
                    setIsImageViewerOpen(true);
                  }}
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button 
                    variant="secondary" 
                    className="bg-white/80 hover:bg-white"
                    onClick={() => {
                      setActiveImage(0);
                      setIsImageViewerOpen(true);
                    }}
                  >
                    View All Photos
                  </Button>
                </div>
              </div>
              {propertyImages.slice(1, 5).map((img, idx) => (
                <div key={idx} className="hidden md:block rounded-xl overflow-hidden relative group">
                  <img 
                    src={img} 
                    alt={`${property.title} ${idx + 1}`} 
                    className="w-full h-full object-cover"
                    onClick={() => {
                      setActiveImage(idx + 1);
                      setIsImageViewerOpen(true);
                    }}
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-10">
              {/* Overview */}
              <section>
                <h2 className="text-2xl font-bold mb-6">Property Overview</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                  <div className="bg-white p-4 rounded-xl border border-border shadow-sm">
                    <Bed className="h-5 w-5 text-primary mb-2" />
                    <div className="text-sm text-muted-foreground">Bedrooms</div>
                    <div className="text-xl font-semibold">{property.bedrooms}</div>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-border shadow-sm">
                    <Bath className="h-5 w-5 text-primary mb-2" />
                    <div className="text-sm text-muted-foreground">Bathrooms</div>
                    <div className="text-xl font-semibold">{property.bathrooms}</div>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-border shadow-sm">
                    <Square className="h-5 w-5 text-primary mb-2" />
                    <div className="text-sm text-muted-foreground">Square Feet</div>
                    <div className="text-xl font-semibold">{property.area.toLocaleString()}</div>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-border shadow-sm">
                    <Building className="h-5 w-5 text-primary mb-2" />
                    <div className="text-sm text-muted-foreground">Property Type</div>
                    <div className="text-xl font-semibold">Villa</div>
                  </div>
                </div>
                
                <div className="space-y-4 text-foreground">
                  <p>
                    This stunning beachfront villa offers luxury coastal living at its finest, with breathtaking ocean views and direct beach access. The property features an open concept design with floor-to-ceiling windows that flood the space with natural light and showcase the panoramic water views.
                  </p>
                  <p>
                    The chef's kitchen is equipped with top-of-the-line appliances, custom cabinetry, and a large center island. The primary suite is a true retreat with a private balcony, spa-like bathroom, and generous walk-in closet. Additional bedrooms each have ensuite bathrooms and ample closet space.
                  </p>
                  <p>
                    Outdoor living spaces include a beachfront terrace, infinity pool, and landscaped gardens. Smart home technology, a home theater, wine cellar, and gym complete this exceptional property.
                  </p>
                </div>
              </section>
              
              {/* Features */}
              <section>
                <h2 className="text-2xl font-bold mb-6">Property Features</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4">
                  {propertyFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary mr-2" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </section>
              
              {/* Blockchain Verification */}
              <section className="bg-gradient-to-r from-primary/10 to-primary/5 p-6 rounded-xl border border-primary/20">
                <div className="flex items-start">
                  <div className="bg-primary/20 p-3 rounded-lg mr-5">
                    <ShieldCheck className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold mb-2">Blockchain Verified Property</h2>
                    <p className="text-muted-foreground mb-4">
                      This property's ownership history and details are verified on the blockchain, ensuring transparency and security.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        <span className="text-sm">Ownership Verification</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        <span className="text-sm">Transaction History</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        <span className="text-sm">Smart Contract Enabled</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        <span className="text-sm">Property Documents</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              
              {/* Transaction History */}
              <section>
                <h2 className="text-2xl font-bold mb-6">Transaction History</h2>
                <div className="bg-white rounded-xl border border-border overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-secondary/50">
                      <tr>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Date</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Event</th>
                        <th className="px-6 py-3 text-right text-sm font-semibold text-foreground">Price</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {transactionHistory.map((transaction, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-secondary/20'}>
                          <td className="px-6 py-4 text-sm text-muted-foreground">{transaction.date}</td>
                          <td className="px-6 py-4 text-sm font-medium">{transaction.event}</td>
                          <td className="px-6 py-4 text-sm text-right font-medium">{transaction.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            </div>
            
            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Agent */}
              <div className="bg-white p-6 rounded-xl border border-border shadow-sm sticky top-24">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mr-4">
                    <User className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Sarah Johnson</h3>
                    <p className="text-muted-foreground text-sm">Luxury Real Estate Specialist</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <Button variant="outline" className="w-full">
                    <Phone className="h-4 w-4 mr-2" />
                    Call
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Mail className="h-4 w-4 mr-2" />
                    Email
                  </Button>
                </div>
                
                <div className="border-t border-border pt-6 space-y-4">
                  <h3 className="font-semibold">Schedule a Tour</h3>
                  <div className="grid grid-cols-3 gap-2">
                    <Button variant="outline" size="sm" className="text-sm">Today</Button>
                    <Button variant="outline" size="sm" className="text-sm">Tomorrow</Button>
                    <Button variant="outline" size="sm" className="text-sm">Wed</Button>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    <Button variant="outline" size="sm" className="text-xs">10 AM</Button>
                    <Button variant="outline" size="sm" className="text-xs">12 PM</Button>
                    <Button variant="outline" size="sm" className="text-xs">2 PM</Button>
                    <Button variant="outline" size="sm" className="text-xs">4 PM</Button>
                  </div>
                  <Button className="w-full">
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule Tour
                  </Button>
                </div>
              </div>
              
              {/* Blockchain Actions */}
              <div className="bg-white p-6 rounded-xl border border-border shadow-sm">
                <h3 className="font-semibold mb-4">Blockchain Actions</h3>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Wallet className="h-4 w-4 mr-3" />
                    Connect Wallet
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <ShieldCheck className="h-4 w-4 mr-3" />
                    View on Blockchain
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Clock className="h-4 w-4 mr-3" />
                    Transaction History
                  </Button>
                </div>
                <div className="mt-4 pt-4 border-t border-border">
                  <Button className="w-full">Make an Offer</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Image viewer modal */}
      {isImageViewerOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center animate-fade-in">
          <div className="absolute top-6 right-6 z-10">
            <Button 
              variant="ghost" 
              size="sm" 
              className="h-10 w-10 rounded-full bg-black/50 text-white hover:bg-black/70 p-0"
              onClick={() => setIsImageViewerOpen(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          <div className="w-full h-full max-w-7xl flex flex-col">
            <div className="flex-grow flex items-center justify-center p-8">
              <img 
                src={propertyImages[activeImage]} 
                alt={`Property view ${activeImage + 1}`}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="p-4 flex justify-center">
              <div className="flex gap-2 overflow-x-auto max-w-full">
                {propertyImages.map((img, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={cn(
                      "w-20 h-20 rounded-md overflow-hidden flex-shrink-0 border-2",
                      activeImage === idx ? "border-primary" : "border-transparent"
                    )}
                  >
                    <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default PropertyDetail;
