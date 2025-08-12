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

      <section className="container mx-auto grid md:grid-cols-2 gap-8 py-12 items-center animate-enter">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in">Explore Smarter with WanderPages</h1>
          <p className="text-lg text-muted-foreground">Expertly crafted travel eBooks with insider tips, detailed itineraries, and instant download. Trusted by thousands of travelers.</p>
          <div className="flex gap-3">
            <Link to="/shop"><Button size="lg">Shop Travel eBooks Now</Button></Link>
            <Link to="/about"><Button variant="outline" size="lg">About Us</Button></Link>
          </div>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-3 gap-3">
          <img src={santorini} alt="Santorini sunset travel hero image" className="rounded-md object-cover h-40 md:h-56 w-full hover-scale animate-fade-in" loading="lazy" />
          <img src={japan} alt="Tokyo neon street at night travel hero image" className="rounded-md object-cover h-40 md:h-56 w-full hover-scale animate-fade-in" loading="lazy" />
          <img src={maldives} alt="Maldives tropical aerial travel hero image" className="rounded-md object-cover h-40 md:h-56 w-full hover-scale animate-fade-in" loading="lazy" />
        </div>
      </section>

      <section className="container mx-auto py-10 animate-fade-in">
        <h2 className="text-2xl font-semibold mb-6">Featured eBooks</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <section className="container mx-auto py-10 animate-fade-in">
        <h2 className="text-2xl font-semibold mb-6">Why Choose WanderPages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 border rounded-lg bg-card hover-scale transition-transform">
            <Download className="mb-3" />
            <h3 className="font-medium mb-1">Instant Download</h3>
            <p className="text-sm text-muted-foreground">Get your eBooks immediately after purchase and start planning today.</p>
          </div>
          <div className="p-6 border rounded-lg bg-card hover-scale transition-transform">
            <BookOpen className="mb-3" />
            <h3 className="font-medium mb-1">Expert Authors</h3>
            <p className="text-sm text-muted-foreground">Our guides are written by seasoned travelers with on-the-ground insights.</p>
          </div>
          <div className="p-6 border rounded-lg bg-card hover-scale transition-transform">
            <Users className="mb-3" />
            <h3 className="font-medium mb-1">Trusted by Thousands</h3>
            <p className="text-sm text-muted-foreground">Join a community of explorers who rely on WanderPages for smarter trips.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
