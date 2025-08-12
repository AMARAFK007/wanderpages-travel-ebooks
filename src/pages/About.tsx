import SEO from "@/components/SEO";

const About = () => {
  return (
    <main className="container mx-auto py-10">
      <SEO
        title="About WanderPages | Aexora Enterprises"
        description="WanderPages by Aexora Enterprises publishes expert travel eBooks to help you explore the world with confidence."
        keywords={["About WanderPages","Aexora Enterprises","travel publishing"]}
      />
      <h1 className="text-3xl font-bold mb-6">About Us</h1>
      <p className="text-muted-foreground max-w-3xl">
        WanderPages is a travel publishing sub-brand of Aexora Enterprises, created to help travelers
        explore the world through expertly crafted eBooks and guides. From hidden gems to bucket-list
        destinations, our guides make your journeys smoother, richer, and unforgettable.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="p-6 border rounded-lg bg-card">
          <h3 className="font-medium mb-2">Our Mission</h3>
          <p className="text-sm text-muted-foreground">Deliver practical, beautiful, and trustworthy travel content.</p>
        </div>
        <div className="p-6 border rounded-lg bg-card">
          <h3 className="font-medium mb-2">Our Promise</h3>
          <p className="text-sm text-muted-foreground">Clarity, accuracy, and up-to-date tips from real explorers.</p>
        </div>
        <div className="p-6 border rounded-lg bg-card">
          <h3 className="font-medium mb-2">Our Readers</h3>
          <p className="text-sm text-muted-foreground">Thousands of travelers who value time-saving planning.</p>
        </div>
      </div>
    </main>
  );
};

export default About;
