import SEO from "@/components/SEO";
import { useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { ebooks } from "@/data/ebooks";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Checkout = () => {
  const [params] = useSearchParams();
  const sku = params.get("sku");
  const product = useMemo(() => ebooks.find((e) => e.slug === sku), [sku]);

  const handlePayment = () => {
    toast.success("Proceeding to secure payment...");
  };

  if (!product) {
    return (
      <main className="container mx-auto py-10">
        <SEO title="Checkout | WanderPages" description="Secure checkout for travel eBooks." />
        <h1 className="text-2xl font-semibold mb-4">Product not found</h1>
        <Link to="/shop" className="underline">Back to Shop</Link>
      </main>
    );
  }

  return (
    <main className="container mx-auto py-10">
      <SEO
        title={`Checkout – ${product.title} | WanderPages`}
        description={`Secure checkout for ${product.title}. Instant download after purchase.`}
        keywords={[product.title, "checkout", "travel ebook"]}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <img src={product.image} alt={product.alt} className="w-full h-72 object-cover rounded" />
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
          <p className="text-muted-foreground mb-4">{product.description}</p>
          <div className="flex items-center gap-3 text-lg mb-6">
            <span className="font-semibold">${product.priceUSD.toFixed(0)}</span>
            <span className="text-muted-foreground">/ ₹{product.priceINR}</span>
          </div>
          <Button onClick={handlePayment} size="lg">Proceed to Payment</Button>
          <p className="text-xs text-muted-foreground mt-3">You will receive an instant download link after successful payment.</p>
        </div>
      </div>
    </main>
  );
};

export default Checkout;
