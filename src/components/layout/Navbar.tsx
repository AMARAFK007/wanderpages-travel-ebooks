import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `px-3 py-2 rounded-md text-sm font-medium transition-colors story-link ${
    isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
  }`;

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">W</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-foreground">WanderPages</span>
            <span className="text-xs text-muted-foreground hidden sm:block">Your Passport to Every Destination</span>
          </div>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <NavLink to="/" className={navLinkClass} end>
            Home
          </NavLink>
          <NavLink to="/shop" className={navLinkClass}>
            Explore eBooks
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
          <Link to="/shop">
            <Button className="airbnb-button bg-primary hover:bg-primary/90 text-white shadow-sm">
              Shop Now
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
