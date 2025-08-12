import SEO from "@/components/SEO";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`WanderPages enquiry from ${name || "Website Visitor"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
    const mailto = `mailto:aezoraenterprises@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailto;
    toast.success("Opening your email app to send the message.");
  };

  return (
    <main className="container mx-auto py-10">
      <SEO
        title="Contact WanderPages | Travel eBooks Support"
        description="Contact WanderPages for support or enquiries. Email aezoraenterprises@gmail.com or call +91-8260258997."
        keywords={["contact","WanderPages support","Aexora Enterprises"]}
      />
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium" htmlFor="name">Name</label>
            <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" required />
          </div>
          <div>
            <label className="text-sm font-medium" htmlFor="email">Email</label>
            <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" required />
          </div>
          <div>
            <label className="text-sm font-medium" htmlFor="message">Message</label>
            <Textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="How can we help?" rows={6} required />
          </div>
          <Button type="submit">Send Message</Button>
        </form>
        <aside className="space-y-3">
          <div>
            <h2 className="text-lg font-semibold">Support</h2>
            <p className="text-sm text-muted-foreground">Email: <a className="underline" href="mailto:aezoraenterprises@gmail.com">aezoraenterprises@gmail.com</a></p>
            <p className="text-sm text-muted-foreground">Phone: <a className="underline" href="tel:+918260258997">+91-8260258997</a></p>
          </div>
          <p className="text-sm text-muted-foreground">We typically respond within 24–48 hours.</p>
        </aside>
      </div>
    </main>
  );
};

export default Contact;
