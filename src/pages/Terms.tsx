import SEO from "@/components/SEO";

const Terms = () => (
  <main className="container mx-auto py-10">
    <SEO
      title="Terms & Conditions | WanderPages"
      description="Read the terms and conditions for using the WanderPages website and eBooks."
      keywords={["terms","conditions","usage policy"]}
    />
    <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>
    <article className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        By using this website, you agree to comply with our terms. All eBooks are for personal use only. Unauthorized sharing, resale, or reproduction is prohibited. We reserve the right to change these terms at any time, and continued use of the website means you accept the updated terms.
      </p>
    </article>
  </main>
);

export default Terms;
