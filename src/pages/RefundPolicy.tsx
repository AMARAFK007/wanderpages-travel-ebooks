import SEO from "@/components/SEO";

const RefundPolicy = () => (
  <main className="container mx-auto py-10">
    <SEO
      title="Refund & Cancellation Policy | WanderPages"
      description="Read our refund and cancellation policy for digital eBook purchases."
      keywords={["refund policy","cancellation","digital products"]}
    />
    <h1 className="text-3xl font-bold mb-6">Refund / Cancellation Policy</h1>
    <article className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        As our products are digital, all sales are final. We do not issue refunds once the eBook is purchased and delivered. If you experience any technical issues with your download, please contact us within 48 hours at aezoraenterprises@gmail.com, and we will provide a working file.
      </p>
    </article>
  </main>
);

export default RefundPolicy;
