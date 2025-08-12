import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `px-3 py-2 rounded-md text-sm font-medium transition-colors story-link ${
    isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
  }`;

const Navbar = () => {
  return (
    <header className="border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex items-center justify-between py-4">
        <Link to="/" className="flex items-baseline gap-2">
          <span className="text-xl font-semibold">WanderPages</span>
          <span className="text-sm text-muted-foreground">Your Passport to Every Destination</span>
        </Link>
        <div className="hidden md:flex items-center gap-2">
          <NavLink to="/" className={navLinkClass} end>
            Home
          </NavLink>
          <NavLink to="/shop" className={navLinkClass}>
            Shop
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
          <Link to="/shop">
            <Button size="sm">Shop Travel eBooks Now</Button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
