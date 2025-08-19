import SEO from "@/components/SEO";
import { useMemo, useState, useEffect, useRef } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { ebooks } from "@/data/ebooks";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { ArrowLeft, Lock, Shield, Zap, Star, Sparkles } from "lucide-react";

const Checkout = () => {
  const [params] = useSearchParams();
  const sku = params.get("sku");
  const product = useMemo(() => ebooks.find((e) => e.slug === sku), [sku]);
  
  const [email, setEmail] = useState("");
  const [selectedMethod, setSelectedMethod] = useState("cryptomus");
  const [isProcessing, setIsProcessing] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse tracking effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      return () => container.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  const handlePayment = async () => {
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    setIsProcessing(true);
    
    await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate processing
    toast.success("Redirecting to secure payment...");
    setIsProcessing(false);
  };

  const isValidEmail = email.includes("@") && email.includes(".");
  const canProceed = email && isValidEmail;

  if (!product) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold mb-4">Product not found</h1>
          <Link to="/shop" className="text-blue-400 hover:text-blue-300 underline">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={containerRef}
      className="min-h-screen bg-black text-white font-futuristic relative overflow-hidden"
      style={{
        background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.15) 0%, transparent 50%), 
                     conic-gradient(from 0deg at 50% 50%, rgba(139, 92, 246, 0.1) 0deg, rgba(16, 185, 129, 0.1) 120deg, rgba(59, 130, 246, 0.1) 240deg, rgba(139, 92, 246, 0.1) 360deg), 
                     #000000`
      }}
    >
      <SEO
        title={`Secure Checkout – ${product.title} | WanderPages`}
        description={`Complete your secure purchase of ${product.title}. Instant download with 256-bit SSL encryption.`}
        keywords={[product.title, "secure checkout", "travel ebook", "instant download"]}
      />

      {/* Floating Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse" 
             style={{ animationDelay: "0s", animationDuration: "4s" }} />
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-purple-500/20 rounded-full blur-xl animate-pulse" 
             style={{ animationDelay: "1s", animationDuration: "5s" }} />
        <div className="absolute bottom-1/3 left-1/3 w-20 h-20 bg-emerald-500/20 rounded-full blur-xl animate-pulse" 
             style={{ animationDelay: "2s", animationDuration: "3s" }} />
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-yellow-500/20 rounded-full blur-xl animate-pulse" 
             style={{ animationDelay: "0.5s", animationDuration: "4.5s" }} />
        <div className="absolute bottom-1/4 right-1/4 w-28 h-28 bg-pink-500/20 rounded-full blur-xl animate-pulse" 
             style={{ animationDelay: "1.5s", animationDuration: "3.5s" }} />
      </div>

      {/* Header */}
      <header className="relative z-10 p-6 flex justify-between items-center">
        <Link 
          to="/" 
          className="flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-300"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Home</span>
        </Link>
        <div className="flex items-center gap-2 text-emerald-400">
          <Shield className="w-5 h-5" />
          <span className="text-sm font-medium">Encrypted & Protected Checkout</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-6 py-12 max-w-2xl">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
            Complete Your Purchase Securely
          </h1>
          <p className="text-xl text-white/70 mb-8">
            Fast, safe checkout powered by Gumroad & Cryptomus
          </p>
          
          {/* Trust Indicators */}
          <div className="flex justify-center gap-8 text-sm text-white/60">
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-emerald-400" />
              <span>256-bit SSL</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span>Instant Access</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-400" />
              <span>4.9/5 Rating</span>
            </div>
          </div>
        </div>

        {/* Main Card */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 md:p-12 relative overflow-hidden">
          {/* Inner gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 rounded-3xl" />
          <div className="absolute inset-0 bg-gradient-to-tl from-blue-500/5 via-transparent to-purple-500/5 rounded-3xl" />
          
          <div className="relative z-10 space-y-8">
            {/* Product Summary */}
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
              <img 
                src={product.image} 
                alt={product.alt} 
                className="w-16 h-16 object-cover rounded-xl"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-lg">{product.title}</h3>
                <p className="text-white/60 text-sm">{product.description}</p>
              </div>
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-white/80">
                Email Address
              </label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="h-14 bg-white/5 border-white/20 text-white placeholder:text-white/40 rounded-xl backdrop-blur-sm focus:bg-white/10 focus:border-blue-400/50 transition-all duration-300"
              />
              {!email && (
                <p className="text-white/50 text-sm">Enter your email to continue with checkout</p>
              )}
            </div>

            {/* Payment Methods */}
            <div className="space-y-4">
              <label className="block text-sm font-medium text-white/80">
                Choose Payment Method
              </label>
              
              <div className="grid gap-4">
                {/* Gumroad Card */}
                <div 
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                    selectedMethod === "gumroad" 
                      ? "bg-white/10 border-2 border-blue-400 ring-2 ring-blue-400/20" 
                      : "bg-white/5 border border-white/10 hover:bg-white/8"
                  }`}
                  onClick={() => setSelectedMethod("gumroad")}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center">
                        <span className="text-white font-bold text-xl">gum</span>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-bold text-lg text-pink-400">Gumroad</span>
                          <span className="text-white/50 text-sm">• Trusted platform</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-lg">$14.99</span>
                          <span className="text-white/50 text-sm">Standard price</span>
                        </div>
                        <p className="text-white/60 text-sm">Credit/debit cards, PayPal, and more</p>
                      </div>
                    </div>
                    <div className={`w-6 h-6 rounded-full border-2 transition-all duration-300 ${
                      selectedMethod === "gumroad" 
                        ? "border-blue-400 bg-blue-400" 
                        : "border-white/30"
                    }`}>
                      {selectedMethod === "gumroad" && (
                        <div className="w-full h-full rounded-full bg-blue-400 flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Cryptomus Card */}
                <div 
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 relative ${
                    selectedMethod === "cryptomus" 
                      ? "bg-white/10 border-2 border-blue-400 ring-2 ring-blue-400/20" 
                      : "bg-white/5 border border-white/10 hover:bg-white/8"
                  }`}
                  onClick={() => setSelectedMethod("cryptomus")}
                >
                  {/* Best Deal Badge */}
                  <div className="absolute -top-2 -right-2 bg-emerald-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                    BEST DEAL
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl flex items-center justify-center border border-white/10">
                        <span className="text-white font-bold text-xs leading-tight">CRYPTO<br/>MUS</span>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-bold text-lg text-orange-400">Cryptomus</span>
                          <span className="text-white/50 text-sm">• Crypto payments</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-lg">$12.99</span>
                          <span className="text-emerald-400 text-sm font-medium">Save $2.00</span>
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <Sparkles className="w-4 h-4 text-yellow-400" />
                          <span className="text-yellow-400 text-sm font-medium">
                            FREE Looksmaxxing Life-Changing eBook (Worth $47)
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className={`w-6 h-6 rounded-full border-2 transition-all duration-300 ${
                      selectedMethod === "cryptomus" 
                        ? "border-blue-400 bg-blue-400" 
                        : "border-white/30"
                    }`}>
                      {selectedMethod === "cryptomus" && (
                        <div className="w-full h-full rounded-full bg-blue-400 flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Purchase Button */}
            <Button
              onClick={handlePayment}
              disabled={!canProceed || isProcessing}
              className={`w-full h-16 text-lg font-semibold rounded-xl transition-all duration-300 ${
                canProceed && !isProcessing
                  ? "bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-[1.02] text-white"
                  : "bg-white/10 text-white/50 cursor-not-allowed"
              }`}
            >
              <div className="flex items-center justify-center gap-3">
                {isProcessing ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Processing...</span>
                  </>
                ) : !email ? (
                  "Enter Email to Continue"
                ) : (
                  <>
                    <Lock className="w-5 h-5" />
                    <span>
                      Buy Now - ${selectedMethod === "cryptomus" ? "12.99" : "14.99"}
                    </span>
                  </>
                )}
              </div>
            </Button>

            {/* Security Section */}
            <div className="text-center space-y-4 pt-6 border-t border-white/10">
              <div className="flex items-center justify-center gap-2 text-emerald-400">
                <Lock className="w-5 h-5" />
                <span className="font-medium">Encrypted & Protected Checkout</span>
              </div>
              
              <div className="flex justify-center gap-6 text-sm text-white/60">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-emerald-400" />
                  <span>SSL Secured</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span>30-Day Guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-blue-400" />
                  <span>Instant Access</span>
                </div>
              </div>
              
              <p className="text-xs text-white/40 max-w-md mx-auto">
                Your payment information is encrypted and secure. We never store your card details.
                By proceeding, you agree to our terms of service and privacy policy.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Checkout;