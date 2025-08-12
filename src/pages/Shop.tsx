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
    <main className="container mx-auto py-10 animate-fade-in">
      <SEO
        title="Shop Travel eBooks | WanderPages"
        description="Browse premium travel eBooks covering Europe, Japan, Maldives, and more. Instant download, expert authors."
        keywords={["travel ebooks","shop ebooks","budget travel guides","Asia travel guides","Europe travel guides"]}
        jsonLd={productSchema}
      />
      <h1 className="text-3xl font-bold mb-6">Shop eBooks</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </main>
  );
};

export default Shop;
