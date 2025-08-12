import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t mt-16">
      <div className="container mx-auto py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h3 className="text-lg font-semibold">WanderPages</h3>
          <p className="text-sm text-muted-foreground mt-2">Aexora Enterprises</p>
          <p className="text-sm text-muted-foreground">Your Passport to Every Destination</p>
        </div>
        <div>
          <h4 className="text-sm font-medium mb-3">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link className="hover:text-foreground text-muted-foreground" to="/about">About Us</Link></li>
            <li><Link className="hover:text-foreground text-muted-foreground" to="/contact">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-medium mb-3">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li><Link className="hover:text-foreground text-muted-foreground" to="/privacy">Privacy Policy</Link></li>
            <li><Link className="hover:text-foreground text-muted-foreground" to="/refunds">Refund / Cancellation Policy</Link></li>
            <li><Link className="hover:text-foreground text-muted-foreground" to="/terms">Terms & Conditions</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="container mx-auto py-6 text-xs text-muted-foreground flex flex-col md:flex-row items-center justify-between">
          <p>© {year} WanderPages · Aexora Enterprises</p>
          <p>Made with care for travelers worldwide.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
