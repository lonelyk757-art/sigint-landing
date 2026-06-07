import { Button } from "@/components/ui/button";
import { ArrowRight, AlertTriangle, Radio, Zap, ChevronDown, Share2, TrendingUp, Users, Shield, Lock, Eye } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useEffect, useState, useRef } from "react";

/**
 * SIGINT ✓ Landing Page - Professional Government Security Agency Edition
 * Design: Enterprise Security Intelligence Platform
 * 
 * Color Palette:
 * - Primary: Deep Navy Blue (#1B3A6B)
 * - Secondary: Professional Blue (#2E5090)
 * - Accent: Gold (#D4AF37) - Authority & Trust
 * - Alert: Red (#C41E3A) - Critical alerts
 * - Background: Light Gray (#F5F7FA) - Professional
 * - Text: Dark Navy (#1A1F3A) - Readability
 * 
 * Layout: Clean, structured, government-agency style with ample whitespace
 * Typography: Professional serif + sans-serif combination
 * Animation: Subtle, professional transitions
 */

function useCountUp(target: number, duration: number = 2000, shouldStart: boolean = true) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    let startTime: number;
    let animationId: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.floor(progress * target));

      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      }
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [target, duration, shouldStart]);

  return count;
}

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [openFaq, setOpenFaq] = useState<string | undefined>(undefined);
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  const subscribers = useCountUp(500, 2000, statsVisible);
  const cves = useCountUp(1200, 2000, statsVisible);
  const updates = useCountUp(50, 2000, statsVisible);

  useEffect(() => {
    setIsVisible(true);
    document.title = "SIGINT ✓ | Government Security Intelligence Platform";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "SIGINT ✓ - Enterprise security intelligence platform delivering curated threat intelligence, CVE alerts, and real-time security updates for government and enterprise organizations.");
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const recentUpdates = [
    {
      id: 1,
      title: "CRITICAL: Apache Log4j RCE Vulnerability - CVSS 10.0",
      description: "Remote code execution in Apache Log4j affecting millions of systems. Immediate patching required for all systems.",
      date: "Today",
      severity: "CRITICAL"
    },
    {
      id: 2,
      title: "HIGH: Windows PrintNightmare Exploit Released",
      description: "Public proof-of-concept available for CVE-2021-34527. Recommended immediate patching for all Windows infrastructure.",
      date: "Yesterday",
      severity: "HIGH"
    },
    {
      id: 3,
      title: "MEDIUM: New Security Research on API Vulnerabilities",
      description: "Comprehensive analysis of modern API security best practices and common vulnerabilities from leading security researchers.",
      date: "2 days ago",
      severity: "MEDIUM"
    }
  ];

  const referralBenefits = [
    {
      icon: Users,
      title: "Expand Network",
      description: "Connect with security professionals and build your intelligence network"
    },
    {
      icon: TrendingUp,
      title: "Strengthen Community",
      description: "Help build a unified security intelligence community across organizations"
    },
    {
      icon: Share2,
      title: "Share Intelligence",
      description: "Distribute critical threat intelligence to protect your network"
    }
  ];

  const capabilities = [
    {
      icon: Eye,
      title: "Threat Monitoring",
      description: "Real-time monitoring of emerging threats and vulnerabilities"
    },
    {
      icon: Lock,
      title: "Vulnerability Tracking",
      description: "Comprehensive CVE database with exploit intelligence"
    },
    {
      icon: Shield,
      title: "Intelligence Fusion",
      description: "Curated security intelligence from multiple authoritative sources"
    }
  ];

  const faqs = [
    {
      id: "faq-1",
      question: "What is SIGINT ✓?",
      answer: "SIGINT ✓ is an enterprise-grade security intelligence platform that delivers curated threat intelligence, critical CVE alerts, and real-time security updates. Designed for government agencies, enterprises, and security professionals who require verified, actionable security intelligence without noise."
    },
    {
      id: "faq-2",
      question: "How often are updates provided?",
      answer: "Intelligence updates are delivered continuously throughout the day. Critical threats and CVEs are escalated immediately. Regular digest updates are provided multiple times daily to ensure you remain informed of all significant security developments."
    },
    {
      id: "faq-3",
      question: "Is this service available for government agencies?",
      answer: "Yes. SIGINT ✓ is designed to meet the needs of government agencies, enterprises, and security professionals. Our platform provides verified threat intelligence suitable for official security operations and incident response."
    },
    {
      id: "faq-4",
      question: "What sources do you monitor?",
      answer: "We monitor and aggregate intelligence from: Hacker News, CVE databases, security research publications, threat intelligence feeds, and verified security community sources. All information is verified before distribution."
    },
    {
      id: "faq-5",
      question: "How do I subscribe?",
      answer: "Subscribe through our WhatsApp channel for real-time intelligence delivery. No registration required - simply join and start receiving verified threat intelligence immediately."
    },
    {
      id: "faq-6",
      question: "Can I share this intelligence with my organization?",
      answer: "Absolutely. We encourage sharing of SIGINT ✓ intelligence within your organization and security networks. Help strengthen collective cybersecurity posture across your agency or enterprise."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header/Navigation */}
      <header className="border-b border-border bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">SIGINT ✓</h1>
              <p className="text-xs text-muted-foreground">Security Intelligence Platform</p>
            </div>
          </div>
          <a
            href="https://whatsapp.com/channel/0029VbCmZq4LNSaDBuWKZ93x"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="sm"
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Subscribe Now
            </Button>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-gray-50 py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-blue-100 rounded text-blue-700 text-sm font-semibold">
            Enterprise Security Intelligence
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Verified Threat Intelligence, <span className="text-blue-600">No Noise</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-4 max-w-2xl mx-auto">
            SIGINT ✓ delivers curated, verified security intelligence for government agencies and enterprises. Real-time CVE alerts, threat monitoring, and actionable intelligence.
          </p>

          <p className="text-sm text-muted-foreground mb-12 max-w-2xl mx-auto font-semibold">
            Trusted by security professionals and organizations worldwide
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://whatsapp.com/channel/0029VbCmZq4LNSaDBuWKZ93x"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8"
              >
                Start Receiving Intelligence
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">
            Platform Capabilities
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Comprehensive security intelligence for modern threat landscapes
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {capabilities.map((cap, index) => {
              const Icon = cap.icon;
              return (
                <div
                  key={index}
                  className="p-8 bg-gradient-to-br from-blue-50 to-gray-50 rounded-lg border border-border hover:border-blue-200 transition-all duration-300"
                >
                  <Icon className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-3">{cap.title}</h3>
                  <p className="text-muted-foreground">{cap.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section ref={statsRef} className="py-20 px-6 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            Intelligence at Scale
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-white mb-4">
                {subscribers}+
              </div>
              <p className="text-blue-100 text-lg">Active Subscribers</p>
              <p className="text-blue-200 text-sm mt-2">Security professionals worldwide</p>
            </div>

            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-white mb-4">
                {cves}+
              </div>
              <p className="text-blue-100 text-lg">CVEs Monitored</p>
              <p className="text-blue-200 text-sm mt-2">Critical vulnerabilities tracked</p>
            </div>

            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-white mb-4">
                {updates}+
              </div>
              <p className="text-blue-100 text-lg">Daily Intelligence Updates</p>
              <p className="text-blue-200 text-sm mt-2">Verified threat intelligence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Threats Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">
            Recent Threat Intelligence
          </h2>
          <p className="text-center text-muted-foreground mb-16">
            Latest verified security alerts and CVE updates
          </p>

          <div className="space-y-4">
            {recentUpdates.map((update) => (
              <div
                key={update.id}
                className="p-6 border-l-4 border-red-600 bg-gradient-to-r from-red-50 to-white rounded hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-block px-3 py-1 bg-red-600 text-white text-xs font-bold rounded">
                        {update.severity}
                      </span>
                      <span className="text-sm text-muted-foreground">{update.date}</span>
                    </div>
                    <h3 className="text-lg font-bold text-foreground">{update.title}</h3>
                  </div>
                </div>
                <p className="text-muted-foreground">{update.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://whatsapp.com/channel/0029VbCmZq4LNSaDBuWKZ93x"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                View All Alerts
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Referral Program */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">
            Strengthen Your Security Network
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Share verified threat intelligence with your organization and security community
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {referralBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="p-8 bg-white rounded-lg border border-border hover:border-blue-200 transition-all text-center"
                >
                  <Icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <a
              href="https://whatsapp.com/channel/0029VbCmZq4LNSaDBuWKZ93x"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Share with Your Organization
                <Share2 className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
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
                  className="py-4 px-6 rounded-lg hover:bg-gray-50 transition-colors group"
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="text-lg font-semibold text-left text-foreground">{faq.question}</span>
                    <ChevronDown className="h-5 w-5 text-blue-600 group-data-[state=open]:rotate-180 transition-transform" />
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

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Receive Verified Threat Intelligence?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Join hundreds of security professionals receiving curated, verified security intelligence daily.
          </p>

          <a
            href="https://whatsapp.com/channel/0029VbCmZq4LNSaDBuWKZ93x"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 px-10 py-7 text-lg font-bold"
            >
              Subscribe Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-white font-bold mb-4">SIGINT ✓</h3>
              <p className="text-sm">
                Enterprise security intelligence platform for government agencies and organizations worldwide.
              </p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Platform</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Features</a></li>
                <li><a href="#" className="hover:text-white transition">Security</a></li>
                <li><a href="#" className="hover:text-white transition">Compliance</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Support</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Connect</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://whatsapp.com/channel/0029VbCmZq4LNSaDBuWKZ93x"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition"
                  >
                    WhatsApp Channel
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>© 2026 SIGINT ✓. All rights reserved. Enterprise Security Intelligence Platform.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
