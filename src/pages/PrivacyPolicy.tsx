import SEO from "@/components/SEO";

const PrivacyPolicy = () => (
  <main className="container mx-auto py-10">
    <SEO
      title="Privacy Policy | WanderPages"
      description="Read the WanderPages privacy policy to understand how we handle your data."
      keywords={["privacy policy","data handling","WanderPages"]}
    />
    <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
    <article className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        Your privacy is important to us. We collect only the necessary personal information to process orders, provide customer service, and improve our offerings. We do not sell or rent your data to third parties. We use cookies to enhance your experience. By using our website, you agree to our Privacy Policy.
      </p>
    </article>
  </main>
);

export default PrivacyPolicy;
