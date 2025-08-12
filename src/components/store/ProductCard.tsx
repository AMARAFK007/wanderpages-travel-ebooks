import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import type { Ebook } from "@/data/ebooks";

interface ProductCardProps {
  product: Ebook;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Card className="overflow-hidden h-full hover-scale animate-fade-in transition-transform">
      <img
        src={product.image}
        alt={product.alt}
        loading="lazy"
        className="w-full h-56 object-cover"
      />
      <CardHeader>
        <CardTitle className="text-base md:text-lg">{product.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-sm text-muted-foreground">{product.description}</p>
        <div className="flex items-center gap-3 text-sm">
          <span className="font-semibold">${product.priceUSD.toFixed(0)}</span>
          <span className="text-muted-foreground">/ ₹{product.priceINR}</span>
        </div>
        <Link to={`/checkout?sku=${product.slug}`}>
          <Button className="w-full">Buy Now</Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
