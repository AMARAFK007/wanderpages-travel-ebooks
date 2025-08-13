import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import santorini from "@/assets/hero/hero-santorini.jpg";
import japan from "@/assets/hero/hero-japan.jpg";
import maldives from "@/assets/hero/hero-maldives.jpg";
import { Link } from "react-router-dom";
import { ebooks } from "@/data/ebooks";
import ProductCard from "@/components/store/ProductCard";
import { Download, Users, BookOpen } from "lucide-react";

const Index = () => {
  const featured = ebooks.filter(e => ["backpacking-europe-on-a-budget","hidden-japan","ultimate-maldives-guide"].includes(e.slug));

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "WanderPages",
    url: typeof window !== 'undefined' ? window.location.origin : "",
    slogan: "Your Passport to Every Destination",
    parentOrganization: {
      "@type": "Organization",
      name: "Aexora Enterprises"
    }
  };

  return (
    <main>
      <SEO
        title="WanderPages | Travel eBooks by Aexora Enterprises"
        description="Expert travel eBooks. Instant download guides for Europe, Japan, Maldives, and more. Your Passport to Every Destination."
        keywords={["travel ebooks","WanderPages","Aexora Enterprises","Japan guide","Europe budget travel","Maldives guide"]}
        jsonLd={orgJsonLd}
      />

      <section className="container mx-auto py-16 px-6 animate-enter">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight text-foreground animate-fade-in">
                Discover the World 
                <span className="text-primary block">One Page at a Time</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Expert-crafted travel guides with insider secrets, detailed itineraries, and instant downloads. 
                Join thousands of smart travelers who trust WanderPages.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/shop">
                <Button className="airbnb-button bg-primary hover:bg-primary/90 text-white text-lg px-8 py-4 shadow-md w-full sm:w-auto">
                  Explore Travel Guides
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" className="airbnb-button border-2 border-gray-300 hover:border-primary text-lg px-8 py-4 w-full sm:w-auto">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img 
                src={santorini} 
                alt="Santorini sunset travel hero image" 
                className="w-full h-64 object-cover rounded-2xl airbnb-card animate-fade-in" 
                loading="lazy" 
              />
              <img 
                src={maldives} 
                alt="Maldives tropical aerial travel hero image" 
                className="w-full h-48 object-cover rounded-2xl airbnb-card animate-fade-in" 
                loading="lazy" 
              />
            </div>
            <div className="pt-8">
              <img 
                src={japan} 
                alt="Tokyo neon street at night travel hero image" 
                className="w-full h-80 object-cover rounded-2xl airbnb-card animate-fade-in" 
                loading="lazy" 
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6 animate-fade-in">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Travel Guides</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Handpicked destinations and expertly crafted guides to inspire your next adventure
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto py-16 px-6 animate-fade-in">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Travelers Choose WanderPages</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to turn your travel dreams into unforgettable journeys
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="airbnb-card p-8 bg-white text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Download className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">Instant Access</h3>
            <p className="text-muted-foreground leading-relaxed">Download your guides immediately and start planning your adventure right away, from anywhere in the world.</p>
          </div>
          <div className="airbnb-card p-8 bg-white text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">Expert Insights</h3>
            <p className="text-muted-foreground leading-relaxed">Written by experienced travelers who've explored every corner of these destinations and share their secrets.</p>
          </div>
          <div className="airbnb-card p-8 bg-white text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">Trusted Community</h3>
            <p className="text-muted-foreground leading-relaxed">Join thousands of smart travelers who rely on our guides for memorable, stress-free journeys.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
