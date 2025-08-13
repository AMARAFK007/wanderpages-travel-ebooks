import SEO from "@/components/SEO";
import ProductCard from "@/components/store/ProductCard";
import { ebooks } from "@/data/ebooks";

const Shop = () => {
  const products = ebooks;

  const productSchema = products.map((p) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.title,
    description: p.description,
    image: p.image,
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: p.priceUSD,
      availability: "https://schema.org/InStock"
    }
  }));

  return (
    <main className="min-h-screen bg-gray-50">
      <SEO
        title="Shop Travel eBooks | WanderPages"
        description="Browse premium travel eBooks covering Europe, Japan, Maldives, and more. Instant download, expert authors."
        keywords={["travel ebooks","shop ebooks","budget travel guides","Asia travel guides","Europe travel guides"]}
        jsonLd={productSchema}
      />
      
      <div className="bg-white py-16 border-b">
        <div className="container mx-auto px-6 text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Explore Our Travel Guide Collection
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From hidden gems to popular destinations, find your next adventure with our expertly crafted travel guides
          </p>
        </div>
      </div>

      <div className="container mx-auto py-16 px-6 animate-fade-in">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Shop;
