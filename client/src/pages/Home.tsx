import { Button } from "@/components/ui/button";
import { ArrowRight, AlertTriangle, Radio, Zap, ChevronDown } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useEffect, useState } from "react";

/**
 * SIGINT ✓ Landing Page
 * Design: Hacker Aesthetic + Neon Minimalism
 * 
 * Color Palette:
 * - Background: Deep black (#0A0E27)
 * - Accents: Neon green (#00FF41), Cyan (#00D9FF)
 * - Text: Off-white (#F0F0F0)
 * 
 * Layout: Asymmetric sections with diagonal dividers, neon glow effects
 * Animation: Smooth fade-in, hover glow, subtle pulse on CTA
 */

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [openFaq, setOpenFaq] = useState<string | undefined>(undefined);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const faqs = [
    {
      id: "faq-1",
      question: "What is SIGINT ✓?",
      answer: "SIGINT ✓ is a curated security intelligence channel that delivers the most relevant hacker news stories, critical CVE alerts, and security exploits. We filter out the noise and deliver only what matters to the security community."
    },
    {
      id: "faq-2",
      question: "How often do you post updates?",
      answer: "We post curated updates multiple times daily, whenever there are significant security developments, critical CVEs, or trending stories in the hacker community. Our goal is to keep you informed without overwhelming your inbox."
    },
    {
      id: "faq-3",
      question: "Is this channel free?",
      answer: "Yes! SIGINT ✓ is completely free. We believe in democratizing security intelligence. Just join our WhatsApp channel and start receiving curated updates immediately."
    },
    {
      id: "faq-4",
      question: "What kind of content do you share?",
      answer: "We share top stories from Hacker News, critical CVE alerts with exploit information, security research, vulnerability disclosures, and tech news relevant to developers and security professionals. Everything is filtered for signal, not noise."
    },
    {
      id: "faq-5",
      question: "How do I join the channel?",
      answer: "Simply click the 'Subscribe on WhatsApp' button on this page. It will take you directly to our WhatsApp channel where you can join with one click. No registration or personal information required."
    },
    {
      id: "faq-6",
      question: "Can I share content from SIGINT ✓?",
      answer: "Absolutely! We encourage you to share SIGINT ✓ updates with your network. Help spread the signal and build a community of informed security professionals."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-20 px-4">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0 opacity-40"
          style={{
            backgroundImage:
              "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663605113632/dFAKGaeE9dJ4B9b8ERJfTf/hero-bg-1-oSwZJbt8Sms3pBQGHww7gF.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 z-1 bg-gradient-to-b from-background/80 via-background/50 to-background" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div
            className={`mb-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <img
              src="/manus-storage/sigint-logo_fccffe38.jpg"
              alt="SIGINT ✓"
              className="h-48 w-auto mx-auto neon-glow"
            />
          </div>

          {/* Main Headline */}
          <h1
            className={`text-5xl md:text-7xl font-bold mb-6 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{
              fontFamily: "'Space Mono', monospace",
              color: "#00FF41",
              textShadow: "0 0 20px rgba(0, 255, 65, 0.5)",
            }}
          >
            SIGINT ✓
          </h1>

          {/* Tagline */}
          <p
            className={`text-xl md:text-2xl mb-4 text-text-light transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            No Noise. Just Signal.
          </p>

          {/* Description */}
          <p
            className={`text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Filtered Hacker News stories. Critical CVE alerts + exploits. Zero clickbait, zero spam.
            <br />
            <span className="text-neon-green font-semibold">Just the signal. Everything else goes to /dev/null</span>
          </p>

          {/* CTA Button */}
          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <a
              href="https://whatsapp.com/channel/0029VbCmZq4LNSaDBuWKZ93x"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="px-8 py-6 text-lg font-bold transition-glow btn-neon-glow"
                style={{
                  backgroundColor: "#00FF41",
                  color: "#0A0E27",
                  borderRadius: "4px",
                }}
              >
                Join the Channel
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-neon-green rounded-full flex items-center justify-center">
            <div className="w-1 h-2 bg-neon-green rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Diagonal Divider */}
      <svg
        className="w-full h-24 text-background"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z"
          fill="currentColor"
        />
      </svg>

      {/* Features Section */}
      <section className="bg-dark-secondary py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            style={{
              color: "#00FF41",
              textShadow: "0 0 15px rgba(0, 255, 65, 0.3)",
            }}
          >
            What You Get
          </h2>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div
              className="group p-8 bg-card rounded-lg border border-border transition-all duration-300 hover:border-neon-green hover:shadow-lg"
              style={{
                borderLeft: "4px solid #00FF41",
              }}
            >
              <div className="flex items-center mb-4">
                <Radio className="h-8 w-8 text-neon-green mr-3" />
                <h3 className="text-2xl font-bold text-text-white">Hacker News</h3>
              </div>
              <p className="text-muted-foreground text-lg">
                Top stories from Hacker News, filtered for relevance. No fluff, no clickbait. Only what matters to the community.
              </p>
            </div>

            {/* Feature 2 */}
            <div
              className="group p-8 bg-card rounded-lg border border-border transition-all duration-300 hover:border-neon-cyan hover:shadow-lg"
              style={{
                borderLeft: "4px solid #00D9FF",
              }}
            >
              <div className="flex items-center mb-4">
                <AlertTriangle className="h-8 w-8 text-neon-cyan mr-3" />
                <h3 className="text-2xl font-bold text-text-white">CVE Alerts</h3>
              </div>
              <p className="text-muted-foreground text-lg">
                Critical vulnerabilities and exploits delivered instantly. Stay ahead of threats with real-time security intelligence.
              </p>
            </div>

            {/* Feature 3 */}
            <div
              className="group p-8 bg-card rounded-lg border border-border transition-all duration-300 hover:border-neon-green hover:shadow-lg"
              style={{
                borderLeft: "4px solid #00FF41",
              }}
            >
              <div className="flex items-center mb-4">
                <Zap className="h-8 w-8 text-neon-green mr-3" />
                <h3 className="text-2xl font-bold text-text-white">Zero Noise</h3>
              </div>
              <p className="text-muted-foreground text-lg">
                Every message is curated. No spam, no ads, no filler. Pure signal. Everything else goes to /dev/null.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Diagonal Divider 2 */}
      <svg
        className="w-full h-24 text-dark-secondary"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,50 Q300,100 600,50 T1200,50 L1200,0 L0,0 Z"
          fill="currentColor"
        />
      </svg>

      {/* FAQ Section */}
      <section className="bg-dark-secondary py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            style={{
              color: "#00FF41",
              textShadow: "0 0 15px rgba(0, 255, 65, 0.3)",
            }}
          >
            Frequently Asked Questions
          </h2>

          <Accordion type="single" collapsible value={openFaq} onValueChange={setOpenFaq}>
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="border-b border-border mb-2 last:border-b-0"
              >
                <AccordionTrigger
                  className="py-4 px-6 rounded-lg hover:bg-card/50 transition-colors group"
                  style={{
                    color: "#F0F0F0",
                  }}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="text-lg font-semibold text-left">{faq.question}</span>
                    <ChevronDown className="h-5 w-5 text-neon-green group-data-[state=open]:rotate-180 transition-transform" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground text-lg leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Diagonal Divider 3 */}
      <svg
        className="w-full h-24 text-dark-secondary"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z"
          fill="currentColor"
        />
      </svg>

      {/* Call-to-Action Section */}
      <section className="bg-background py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">First Intel Drop Coming Soon</h2>
          <p className="text-xl text-muted-foreground mb-12">
            Join our WhatsApp channel now to be the first to receive curated security intelligence and top tech stories.
          </p>

          <a
            href="https://whatsapp.com/channel/0029VbCmZq4LNSaDBuWKZ93x"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="px-10 py-7 text-lg font-bold transition-glow btn-neon-glow animate-pulse"
              style={{
                backgroundColor: "#00FF41",
                color: "#0A0E27",
                borderRadius: "4px",
              }}
            >
              Subscribe on WhatsApp
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-secondary border-t border-border py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-neon-green font-bold mb-4">SIGINT ✓</h3>
              <p className="text-muted-foreground">
                No noise. Just signal. Security intelligence for hackers and developers.
              </p>
            </div>
            <div>
              <h3 className="text-neon-cyan font-bold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://whatsapp.com/channel/0029VbCmZq4LNSaDBuWKZ93x"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-neon-green transition-colors"
                  >
                    WhatsApp Channel
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-neon-green font-bold mb-4">About</h3>
              <p className="text-muted-foreground text-sm">
                Curated security intelligence and tech news. No clickbait. No spam.
              </p>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center text-muted-foreground text-sm">
            <p>© 2026 SIGINT ✓. All signal, no noise.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
