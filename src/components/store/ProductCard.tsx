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
    <Card className="airbnb-card border-0 overflow-hidden h-full animate-fade-in bg-white">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.alt}
          loading="lazy"
          className="w-full h-56 object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="p-4 space-y-3">
        <h3 className="font-semibold text-base leading-snug text-foreground line-clamp-2">{product.title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">{product.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="font-bold text-lg text-foreground">${product.priceUSD.toFixed(0)}</span>
            <span className="text-sm text-muted-foreground">/ ₹{product.priceINR}</span>
          </div>
        </div>
        <Link to={`/checkout?sku=${product.slug}`} className="block">
          <Button className="w-full airbnb-button bg-primary hover:bg-primary/90 text-white border-0 shadow-none font-semibold">
            Buy Now
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
